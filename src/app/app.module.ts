import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { HeaderComponent } from './header/header.component';
import {UserListComponent} from './user/userlist/userlist.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';
import { UserCardComponent } from './user/user-card/user-card.component';
import {UserService} from './user/user.services';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostCardComponent } from './post/post-card/post-card.component';
import {PostService} from './post/post.services';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    UserListComponent,
    CommentComponent,
    HeaderComponent,
    UserCardComponent,
    PostListComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
