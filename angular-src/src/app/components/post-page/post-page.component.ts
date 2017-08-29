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
  selector: 'app-feed-root',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})

export class PostPageComponent implements OnInit {

  totals: Totals;
  private sub: any;
  activePost: Post;
  totalTimeBiked: {
    days: number,
    hours: number,
    minutes: number
  } = { days: 0, hours: 0, minutes: 0};

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.postService.getPostById(id).subscribe(response => {
        if (response.success){
          this.activePost = response.post;
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

}
