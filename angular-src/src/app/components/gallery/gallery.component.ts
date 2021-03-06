import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Post} from "../feed/feed.component";
declare const jQuery: any;

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
  photos: string[];
  s3url: string;
  pageNumbers: string[];
  activePage: Post[];
  imagePreview: string;
  photoGroupOne: string[];
  photoGroupTwo: string[];
  photoGroupThree: string[];
  photoGroupFour: string[];
  mapOfPages: any;
  visiblePosts: Post[];
  numOfPostsPerPage: number;

  constructor(private postService: PostService,
              private flashMessagesService: FlashMessagesService) {}


  ngOnInit(): void {
    this.numOfPostsPerPage = 4;
    this.s3url = 'https://blog-post-photos.s3.amazonaws.com/';
    this.postService.getPictures().subscribe(response => {
      if (response.success) {
        this.photos = response.photos;
        this.photoGroupOne = [];
        this.photoGroupTwo = [];
        this.photoGroupThree = [];
        this.photoGroupFour = [];
        this.setPhotoGroups();
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

  setPhotoGroups(): void {
    const numOfPhotos = this.photos.length;
    let count = 1;
    for (let i = 0; i < numOfPhotos; i++) {
      this.addPhotoToArray(this.photos[i], count);
      if (count === 4) {
        count = 1;
      } else {
        count++;
      }
    }
  }

  addPhotoToArray(photo, index): void {
    switch (index) {
      case 1:
        this.photoGroupOne.push(photo);
        break;
      case 2:
        this.photoGroupTwo.push(photo);
        break;
      case 3:
        this.photoGroupThree.push(photo);
        break;
      case 4:
        this.photoGroupFour.push(photo);
        break;
    }
  }

  changePage(pageNum) {
    this.activePage = this.mapOfPages[pageNum];
  }

  private setupPagination() {
    let numOfPosts = this.visiblePosts.length;
    let pageNumber = 1;
    for (let i = 0, j = numOfPosts; i < numOfPosts; i += this.numOfPostsPerPage) {
      this.mapOfPages[pageNumber] = this.visiblePosts.slice(i, i + this.numOfPostsPerPage);
      pageNumber++;
    }
    this.pageNumbers = Object.keys(this.mapOfPages);
    this.activePage = this.mapOfPages[1];
  }
}
