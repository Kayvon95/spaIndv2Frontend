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
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CommentCardComponent } from './comment/comment-card/comment-card.component';
import {CommentService} from './comment/comment.services';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { CommentDetailComponent } from './comment/comment-detail/comment-detail.component';
import { CommentEditComponent } from './comment/comment-edit/comment-edit.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';

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
    PostCardComponent,
    PostEditComponent,
    UserEditComponent,
    UserDetailComponent,
    CommentListComponent,
    CommentCardComponent,
    PostDetailComponent,
    CommentDetailComponent,
    CommentEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
