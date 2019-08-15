import {Component, OnInit} from '@angular/core';
import {PostsService} from "../shared/services/posts.service";
import {Post} from "../shared/model/post";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
    selector: 'app-posts-list',
    templateUrl: './posts-list.component.html',
    styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
    posts: Post[];

    constructor(private spinner: NgxSpinnerService, private postService: PostsService) {
    }

    getPosts(): void {
        this.postService.getPosts().subscribe(response => {
            this.posts = response.reverse();
            this.getEmpty();
        })
    }

    getEmpty(): void {
        let i = 0;
        for (let post of Object.keys(this.posts)) {
            if (!!this.posts[post].artwork)
                console.log(++i, this.posts[post].artwork);
        }
    }


    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide()
        }, 3000);
        this.getPosts();
    }

}
