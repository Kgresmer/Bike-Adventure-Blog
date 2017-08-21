import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Http} from '@angular/http';

declare const jQuery: any;

export class Post {
  _id: number;
  date: string;
  title: string;
  body: string;
  photos: string[];
  tags: string;
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
  totalTimeBiked: {
    days: number,
    hours: number,
    minutes: number
  } = { days: 0, hours: 0, minutes: 0};

  ngOnInit(): void {
    // TODO implement search by date, by body content/title
    jQuery(window).scroll(function(){
      if (jQuery(window).scrollTop() > 295) {
        jQuery("#totals-display").offset({top: jQuery(window).scrollTop() + 50});
      } else {
        jQuery("#totals-display").offset({top: 375});
      }
    });

    this.getTotals();
    this.postService.getAllPosts().subscribe(response => {
      this.posts = response.posts.reverse();
    });
  }

  getTotals(): void {
    this.postService.getTotals().subscribe(response => {
      if (response.success) {
        this.totals = response.totals;
        if (this.totals.totalTimeBiked) {
          this.totalTimeBiked.days = Math.floor(this.totals.totalTimeBiked / 1440);
          this.totalTimeBiked.hours = Math.floor(this.totals.totalTimeBiked / 60);
          this.totalTimeBiked.minutes = this.totals.totalTimeBiked % 60;
        }
      } else {
        this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced the totals. ', {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }

  public searchForTag(searchText) {

  }
}
