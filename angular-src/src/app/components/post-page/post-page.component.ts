import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Http} from '@angular/http';
import {ActivatedRoute} from "@angular/router";
import {Post} from "../feed/feed.component";

declare const jQuery: any;

export class Totals {
  totalMilesBiked: number;
  totalTimeBiked: number;
}

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})

export class PostPageComponent implements OnInit {

  totals: Totals;
  private sub: any;
  activePost: Post;
  nextPost: Post;
  previousPost: Post;
  totalTimeBiked: {
    days: number,
    hours: number,
    minutes: number
  } = { days: 0, hours: 0, minutes: 0};

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.nextPost = null;
    this.previousPost = null;
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.postService.getPostById(id).subscribe(response => {
        if (response.success){
          this.activePost = response.post;
          if (this.activePost.weatherCondition) {
            this.setWeatherPhoto();
          }
          if (this.activePost.date) {
            this.activePost.date = this.activePost.date.split('T')[0];
          }
          let currentDate = new Date(this.activePost.date);
          let previousDayDate = new Date(currentDate.getTime() - (24*60*60*1000)).toISOString().split('T')[0];
          let nextDayDate = new Date(currentDate.getTime() + (24*60*60*1000)).toISOString().split('T')[0];

          this.postService.getPostsByDate(previousDayDate).subscribe( response => {
            if (response.success && response.posts.length > 0) {
              this.previousPost = response.posts[0];
            } else {
              this.previousPost = null;
            }
          })
          this.postService.getPostsByDate(nextDayDate).subscribe( response => {
            if (response.success && response.posts.length > 0) {
              this.nextPost = response.posts[0];
            } else {
              this.nextPost = null;
            }
          })
        } else {
          this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced that post. ', {
            cssClass: 'alert-danger',
            timeout: 5000});
        }
      })
    });

    jQuery(window).scroll(function(){
      if (jQuery(window).width() > 780) {
        if (jQuery(window).scrollTop() > 220) {
          jQuery("#totals-display").offset({top: jQuery(window).scrollTop() + 5});
        } else {
          let offset = jQuery("#header-image").height() + 90;
          jQuery("#totals-display").offset({top: offset});
        }
      }
    });

    this.getTotals();
  }

  getTotals(): void {
    this.postService.getTotals().subscribe(response => {
      if (response.success) {
        this.totals = response.totals;
        if (this.totals.totalTimeBiked) {
          this.totalTimeBiked.days = Math.floor(this.totals.totalTimeBiked / 1440);
          this.totalTimeBiked.hours = Math.floor((this.totals.totalTimeBiked - this.totalTimeBiked.days * 1440) / 60);
          this.totalTimeBiked.minutes = (this.totals.totalTimeBiked - (this.totalTimeBiked.days * 1440) - (this.totalTimeBiked.hours * 60)) % 60;
        }
      } else {
        this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced the totals. ', {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }

  removedPostFromPage() {
    this.activePost = new Post();
  }

  setWeatherPhoto() {
    switch (this.activePost.weatherCondition[0]) {
      case 'Cloudy': {
        this.activePost.weatherCondition = '../../../assets/cloudy.png';
        return;
      }
      case 'Partly Cloudy': {
        this.activePost.weatherCondition = '../../../assets/partlycloudy.png';
        return;
      }
      case 'Sunny': {
        this.activePost.weatherCondition = '../../../assets/sunny.png';
        return;
      }
      case 'Rainy': {
        this.activePost.weatherCondition = '../../../assets/rain.png';
        return;
      }
      case 'Raining Cats and Dogs': {
        this.activePost.weatherCondition = '../../../assets/rainycats.png';
        return;
      }
    }
  }

}
