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
  photoUrls: string[];

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService,
              private http: Http) {}

  selectedPost: Post;
  posts: Post[];
  totals: Totals;
  totalTimeBiked: string;

  ngOnInit(): void {
    //TODO implement sort, possibly in ngfor
    //TODO implement oldest, newest dropdown
    //TODO implement search by date, by body content/title
    this.getAllPosts();
    this.getTotals();
    this.getAllPhotoUrls().subscribe(response => {
      console.log("photo returned " + response.url);
      this.photoUrls = response.urls;
    });
  }

  //name: string;
//   document: string;
//
// // Observables to combine
//   const name$ = this._personService.getName(id);
//   const document$ = this._documentService.getDocument();
//
//   Observable
// .zip(name$, document$, (name: string, document: string) => ({name, document}))
// .subscribe(pair => {
//   this.name = pair.name;
//   this.document = pair.document;
//   this.showForm();
// })

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

  getAllPhotoUrls() {
    return this.http.get('posts/uploads/all')
      .map(res => res.json());
  }

  getTotals(): void {
    this.postService.getTotals().subscribe(response => {
      if (response.success) {
        this.totals = response.totals;
        if (this.totals.totalTimeBiked) {
          let hours = Math.floor(this.totals.totalTimeBiked / 60);
          let minutes = this.totals.totalTimeBiked % 60;
          this.totalTimeBiked = hours + ' hours ' + minutes + ' minutes'
        }
      } else {
        this.flashMessagesService.show("I'm Sorry. I seem to have misplaced the totals. ", {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }
}
