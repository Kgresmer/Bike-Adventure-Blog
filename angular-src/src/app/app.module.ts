import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

<<<<<<< HEAD
import {PostComponent} from './components/feed/feed.component';
import {PostDetailComponent} from './components/post/post.component';
import {AppComponent} from './app.component';
import {PostService} from './components/feed/feed.service';
=======
import {PostComponent} from './components/posts/posts.component';
import {PostDetailComponent} from './components/posts/post-detail/post-detail.component';
import {AppComponent} from './app.component';
import {PostService} from './components/posts/posts.service';
>>>>>>> 807002605594a68535177d2c714a1e134b5e02e3
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HomeComponent} from './components/home/home.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ModuleWithProviders} from '@angular/core';
import {ValidateService} from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthService} from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';

const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
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
    PostComponent,
    PostDetailComponent,
    AppComponent,
    NavbarComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
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
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
