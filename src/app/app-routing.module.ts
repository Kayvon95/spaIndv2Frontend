import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user/userlist/userlist.component';
import {UserComponent} from './user/user.component';
import {NgModule} from '@angular/core';
import {PostListComponent} from './post/post-list/post-list.component';
import {PostComponent} from './post/post.component';

const appRoutes: Routes = [
  { path: 'users', component: UserComponent, children: [
    { path: 'list', component: UserListComponent },
    // { path: 'create', component: UserEditComponent },
    // { path: ':id', component: UserDetailComponent },
    // { path: ':id/edit', component: UserEditComponent },
  ] },
  { path: 'posts', component: PostComponent, children: [
    {path: 'list', component: PostListComponent},
    // { path: 'create', component: PostEditComponent },
    // { path: ':id', component: PostDetailComponent },
    // { path: ':id/edit', component: PostEditComponent },
  ]},
  { path: '**', redirectTo: '/users/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
