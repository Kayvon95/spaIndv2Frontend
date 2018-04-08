import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {User} from '../model/user.model';

@Injectable()
export class UserService {
  userChanged = new Subject<User[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'users'; // URL to web api
  private users: User[] = [];

  constructor(private http: Http) {
  }

  getAll(): Promise<User[]> {
    console.log('Fetch users from the server');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.users = response.json() as User[];
        return this.users;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

}
