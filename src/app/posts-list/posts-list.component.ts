import { Component, OnInit } from '@angular/core';
import {PostsService} from "../shared/services/posts.service";
import {Post} from "../shared/model/post";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostsService) { }

  getPosts():void {
    this.postService.getPosts().subscribe(response => this.posts = response)
  }
  ngOnInit() {
    this.getPosts();
  }

}
