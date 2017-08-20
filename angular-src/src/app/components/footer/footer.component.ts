

import {Component} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {
  private router: Router;
  private flashMessagesService: FlashMessagesService;
  private authService: AuthService;

  constructor(authService: AuthService,
              flashMessagesService: FlashMessagesService,
              router: Router){
    this.authService = authService;
    this.flashMessagesService = flashMessagesService;
    this.router = router;
  }
  onLogoutClick() {
    this.authService.logout();
    this.flashMessagesService.show('You have been logged out', {
      cssClass: 'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }
}

