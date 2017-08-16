import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
declare const jQuery: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  s3url: string;
  imagePreview: string;

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService) {}

  photos: any[];

  ngOnInit(): void {
    this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
    this.postService.getPictures().subscribe(response => {
      if (response.success) {
        this.photos = response.photos;
      } else {
        this.flashMessagesService.show('I\'m Sorry. I seem to have misplaced the photos. ', {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }

  showModal(s3url: string, Key: string): void {
    this.imagePreview = s3url + Key;
    jQuery('#imagemodal').modal('show');
  }
}
