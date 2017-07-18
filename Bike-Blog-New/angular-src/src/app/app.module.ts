import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { PostComponent } from './components/post/post.component';
import {PostDetailComponent} from './components/post-detail/post-detail.component';
import {AppComponent} from './app.component';
import {PostService} from './components/post/post.service';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';

@NgModule({
  declarations: [
    PostComponent,
    PostDetailComponent,
    AppComponent,
    NavbarComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])

],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
