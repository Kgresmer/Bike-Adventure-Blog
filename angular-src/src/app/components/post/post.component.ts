import {Component, Input} from '@angular/core';
import {Post} from '../feed/feed.component';
import {OnInit} from '@angular/core';
import { Http, Headers} from '@angular/http';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
})

export class PostComponent implements OnInit {
  @Input() selectedPost: Post;
  s3url: string;
  timeBiked: string;
  formattedDate: string;

  ngOnInit(): void {
    this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
    if (this.selectedPost.date) {
      this.formattedDate = new Date(this.selectedPost.date).toLocaleString().substr(0, 10);
    }
    if (this.selectedPost.timeBikedToday) {
      let hours = Math.floor(this.selectedPost.timeBikedToday / 60);
      let minutes = this.selectedPost.timeBikedToday % 60;
      this.timeBiked = hours + ' hours ' + minutes + ' minutes'
    }
  }


}
