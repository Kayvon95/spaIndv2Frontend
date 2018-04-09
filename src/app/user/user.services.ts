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
  // Get single user by ID
  getUser(id: string): Promise<User> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as User;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  // // Add user
  // public addUser(user: User) {
  //   return this.http.post(this.serverUrl, user, {headers: this.headers})
  //     .toPromise()
  //     .then(response => {
  //       console.log(user);
  //       console.dir(response.toString());
  //       return response.toString() as string;
  //     })
  //     .catch(error => {
  //       console.log('handleError');
  //       return Promise.reject(error.message || error);
  //     });
  // }
  // Save
  public saveUsers(users: User) {
  return this.http.post(
    this.serverUrl, users, { headers: this.headers }
  );
}
  // Edit user
  public editUser(id: string, user: User) {
    return this.http.put(
      this.serverUrl + '/' + id, user, { headers: this.headers }
      );
  }
  // Delete
  public deleteUser(id: string) {
    return this.http.delete(
      this.serverUrl + '/' + id, { headers: this.headers }
      );
  }
}
