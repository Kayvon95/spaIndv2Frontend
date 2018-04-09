import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user/userlist/userlist.component';
import {UserComponent} from './user/user.component';
import {NgModule} from '@angular/core';
import {PostListComponent} from './post/post-list/post-list.component';
import {PostComponent} from './post/post.component';
import {UserEditComponent} from './user/user-edit/user-edit.component';
import {UserDetailComponent} from './user/user-detail/user-detail.component';
import {CommentComponent} from './comment/comment.component';
import {CommentListComponent} from './comment/comment-list/comment-list.component';
import {PostEditComponent} from './post/post-edit/post-edit.component';
import {PostDetailComponent} from './post/post-detail/post-detail.component';
import {CommentEditComponent} from './comment/comment-edit/comment-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full'},
  { path: 'users', component: UserComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    { path: 'list', component: UserListComponent },
    { path: 'create', component: UserEditComponent },
    { path: ':id', component: UserDetailComponent },
    { path: ':id/edit', component: UserEditComponent },
  ] },
  { path: 'posts', component: PostComponent, children: [
    {path: '', redirectTo: '/list', pathMatch: 'full'},
    {path: 'list', component: PostListComponent},
    { path: 'create', component: PostEditComponent },
    { path: ':id', component: PostDetailComponent },
    { path: ':id/edit', component: PostEditComponent },
  ]},
  { path: 'comments', component: CommentComponent, children: [
    {path: '', component: CommentListComponent},
    {path: 'list', component: CommentListComponent},
    { path: 'create', component: CommentEditComponent },
    // { path: ':id', component: PostDetailComponent },
    { path: ':id/edit', component: CommentEditComponent},
  ]},
  { path: '**', redirectTo: '/users/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
