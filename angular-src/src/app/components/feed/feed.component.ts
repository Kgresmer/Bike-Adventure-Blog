import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";

export class Post {
  _id: number;
  date: string;
  title: string;
  body: string;
  photos: [string];
  tags: [string];
  recap: boolean;
  milesSinceLastPost: number;
  temperature: string;
  weatherCondition: string;
  author: string;
}

@Component({
  selector: 'app-feed-root',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})

export class FeedComponent implements OnInit {
  constructor(private postService: PostService) {}

  selectedPost: Post;
  posts: Post[];

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts(): void {
    this.postService.getAllPosts().subscribe(response => {
      if (response.success) {
        this.posts = response.data;
      } else {

      }
    });
  }

  onSelect(post: Post): void {
    this.selectedPost = post;
  }
}
