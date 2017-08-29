import {BrowserModule} from '@angular/platform-browser';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {FeedComponent} from './components/feed/feed.component';
import {PostComponent} from './components/post/post.component';
import {AppComponent, NewlinePipe} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ValidateService} from './services/validate.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import {PostService} from "./services/post.service";
import {FileSelectDirective} from 'ng2-file-upload';
import {GalleryComponent} from "./components/gallery/gallery.component";
import {FooterComponent} from "./components/footer/footer.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {PostPageComponent} from "./components/post-page/post-page.component";
import {
  MdDialog, MdTooltip, MdTooltipModule, OVERLAY_PROVIDERS, ScrollDispatcher, ScrollStrategyOptions,
  TooltipComponent
} from "@angular/material";
import {Platform} from "@angular/cdk";

const appRoutes: Routes = [
  {
    path: 'feed',
    component: FeedComponent
  },
  {
    path: 'post/:id',
    component: PostPageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: '',
    component: FeedComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  }];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  declarations: [
    FeedComponent,
    PostComponent,
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    NewlinePipe,
    FileSelectDirective,
    GalleryComponent,
    FooterComponent,
    CalendarComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRouting,
    FlashMessagesModule
  ],
  providers: [
    PostService,
    ValidateService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
