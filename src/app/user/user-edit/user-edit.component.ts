import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {User} from '../../model/user.model';
import {UserService} from '../user.services';
import {Subscription} from 'rxjs/Subscription';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {isUndefined} from 'util';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {
  // user: User = new User();
  // @Input() user: User;
  userForm: FormGroup;
  editMode = false;
  id = '';
  editedUser: User;
  constructor(private router: Router,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    this.userForm = new FormGroup({
      'userName': new FormControl,
      'firstName': new FormControl,
      'lastName': new FormControl,
      'email': new FormControl('', [Validators.required, Validators.email])
    });
    if (this.editMode) {
      this.userService.getUser(this.id)
        .then((user) => {
          this.userForm.setValue({
            userName: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email});
        })
        .catch(error => console.log(error));
    }

  }
  onSaveUser() {
    if (this.editMode) {
      this.userService.editUser(this.id, this.userForm.value)
        .subscribe(
          (response) => this.router.navigate(['/']),
          (error) => console.log(error)
        );
    } else {
      this.userService.saveUsers(this.userForm.value)
        .subscribe(
          (response) => this.router.navigate(['/']),
          (error) => console.log(error)
        );
    }
  }

  onCancel() {
    this.router.navigate(['/users/list']);
  }

  onDeleteUser() {
    this.userService.deleteUser(this.id)
      .subscribe(
        (response) => this.router.navigate(['/']),
        (error) => console.log(error)
      );
  }
}
