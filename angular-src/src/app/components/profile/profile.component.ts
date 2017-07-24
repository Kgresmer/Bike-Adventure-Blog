import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      console.log(this.user);
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onSubmitEditUser() {
    console.log(this.user);
    this.authService.editUser(this.user).subscribe( response => {
      if (response.success) {
        this.flashMessagesService.show(response.msg, {
        cssClass: 'alert-success',
        timeout: 5000});
      } else {
        this.flashMessagesService.show(response.msg, {
          cssClass: 'alert-danger',
          timeout: 5000});
      }
    });
  }
}
