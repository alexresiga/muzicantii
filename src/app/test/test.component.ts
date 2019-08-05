import {Component, OnInit} from '@angular/core';
import {YoutubeService} from "../youtube.service";
import {NgxSpinnerService} from "ngx-spinner";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  videos: any[];
  private unsubscribe$: Subject<any> = new Subject();

  constructor(private spinner: NgxSpinnerService, private youTubeService: YoutubeService) {
  }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide()
    }, 3000);
    this.videos = [];
    this.youTubeService
      .getVideosForChanel('UCSmrKgWDGSlTypALaD-tWhA', 15)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(lista => {
        for (let element of lista["items"]) {
          this.videos.push(element);
        }
      });
  }


  show() {
    this.spinner.show();
  }

  hide() {
    this.spinner.hide();
  }

}
