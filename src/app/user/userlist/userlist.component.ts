import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../user.services';
import {User} from '../../model/user.model';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) { }
  users: User[];
  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.userService.userChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    this.userService.getAll()
      .then(users => {
        this.users = users;
      })
      .catch(error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
