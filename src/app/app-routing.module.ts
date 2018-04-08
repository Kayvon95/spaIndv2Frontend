import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from './user/userlist/userlist.component';
import {UserComponent} from './user/user.component';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  { path: 'users', component: UserComponent, children: [
    { path: 'list', component: UserListComponent },
    // { path: 'create', component: UserEditComponent },
    // { path: ':id', component: UserDetailComponent },
    // { path: ':id/edit', component: UserEditComponent },
  ] },
  { path: '**', redirectTo: '/users/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
