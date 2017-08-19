import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Http} from '@angular/http';

export class Post {
  _id: number;
  date: string;
  title: string;
  body: string;
  photos: string[];
  tags: [string];
  recap: boolean;
  milesSinceLastPost: number;
  timeBikedToday: number;
  temperature: number;
  weatherCondition: string;
  author: string;
}

export class Totals {
  totalMilesBiked: number;
  totalTimeBiked: number;
}

@Component({
  selector: 'app-feed-root',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private http: Http) {}

  posts: Post[];
  totals: Totals;
  totalTimeBiked: string;

  ngOnInit(): void {
    // TODO implement sort, possibly in ngfor
    // TODO implement oldest, newest dropdown
    // TODO implement search by date, by body content/title
    this.getTotals();
    this.postService.getAllPosts().subscribe(response => {
      this.posts = response.posts;
    });
  }

  getTotals(): void {
    this.postService.getTotals().subscribe(response => {
      if (response.success) {
        this.totals = response.totals;
        if (this.totals.totalTimeBiked) {
          let hours = Math.floor(this.totals.totalTimeBiked / 60);
          let minutes = this.totals.totalTimeBiked % 60;
          this.totalTimeBiked = hours + ' hours ' + minutes + ' minutes';
        }
      } else {
        this.flashMessagesService.show("I'm Sorry. I seem to have misplaced the totals. ", {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }
}
