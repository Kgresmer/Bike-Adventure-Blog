import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {FlashMessagesService} from "angular2-flash-messages";

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
  temperature: string;
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
              private flashMessagesService: FlashMessagesService) {}

  selectedPost: Post;
  posts: Post[];
  totals: Totals;

  ngOnInit(): void {
    this.getAllPosts();
    this.getTotals();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(response => {
      if (response.success) {
        this.posts = response.posts;
      } else {
        this.flashMessagesService.show("I'm Sorry. All the posts have evaded me!", {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }

  getTotals(): void {
    this.postService.getTotals().subscribe(response => {
      if (response.success) {
        this.totals = response.totals;
      } else {
        this.flashMessagesService.show("I'm Sorry. I seem to have misplaced the totals. ", {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }
}
