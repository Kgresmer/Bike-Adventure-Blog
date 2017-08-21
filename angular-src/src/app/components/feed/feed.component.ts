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

  pageNumbers: string[];
  activePage: Post[];
  filteredPosts: Post[];
  visiblePosts: Post[];
  filterTags: string[];
  mapOfPages;
  posts: Post[];
  totals: Totals;
  totalTimeBiked: {
    days: number,
    hours: number,
    minutes: number
  } = { days: 0, hours: 0, minutes: 0};

  ngOnInit(): void {
    this.filteredPosts = [];
    this.mapOfPages = {};
    this.filterTags = [];
    jQuery(window).scroll(function(){
      if (jQuery(window).width() > 780) {
        if (jQuery(window).scrollTop() > 220) {
          jQuery("#totals-display").offset({top: jQuery(window).scrollTop() + 50});
        } else {
          let offset = jQuery("#header-image").height() + 20;
          jQuery("#totals-display").offset({top: offset});
        }
      }
    });

    this.getTotals();
    this.postService.getAllPosts().subscribe(response => {
      this.posts = response.posts.reverse();
      this.visiblePosts = this.posts;
      this.setupPagination();
      this.setFilterTags();
    });
  }

  private setFilterTags() {
    for (let i = 0; i < this.posts.length; i++) {
      this.posts[i].tags.split(',').map(tag => {
        if (this.filterTags.indexOf(tag.trim()) < 0) {
          this.filterTags.push(tag.trim());
        }
      });
    }
    console.log(this.filterTags);
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
    this.postService.getPostsByTag(searchText).subscribe(response => {
      if (response.success) {
        this.filteredPosts = response.posts;
        if (this.filteredPosts.length > 0) {
          this.visiblePosts = this.filteredPosts;
          this.setupPagination();
        }
      } else {
        this.flashMessagesService.show('I\'m Sorry. I can\'t find any posts with that tag. ', {
          cssClass: 'alert-danger',
          timeout: 4000});
      }
    });
  }

  clearSearchResults() {
    this.visiblePosts = this.posts;
    this.setupPagination();
  }

  changePage(pageNum) {
    this.activePage = this.mapOfPages[pageNum];
  }

  private setupPagination() {
    let numOfPosts = this.visiblePosts.length;
    let numOfPostsPerPage = 6;
    let pageNumber = 1;
    for (let i = 0, j = numOfPosts; i < numOfPosts; i += numOfPostsPerPage) {
      this.mapOfPages[pageNumber] = this.visiblePosts.slice(i, i + numOfPostsPerPage);
      pageNumber++;
    }
    this.pageNumbers = Object.keys(this.mapOfPages);
    this.activePage = this.mapOfPages[1];
  }
}
