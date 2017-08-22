import {Component} from '@angular/core';
import 'bootstrap/dist/css/bootstrap.css';
import {PostService} from "../../services/post.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent {
  posts: any;
  postService: PostService;
  private flashMessagesService: FlashMessagesService;

  constructor(postService: PostService,
              flashMessagesService: FlashMessagesService) {
    this.postService = postService;
    this.flashMessagesService = flashMessagesService;
    this.posts = [];
  }

  showPostsOnDate(dateChosen) {
    this.postService.getPostsByDate(dateChosen).subscribe(response => {
      if (response.success) {
        this.posts = response.posts;
      } else {
        this.flashMessagesService.show('I\'m Sorry. I can\'t find any posts for that date. ', {
          cssClass: 'alert-danger',
          timeout: 4000
        });
      }
    })
  }

}

