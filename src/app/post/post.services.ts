import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Post} from '../model/post.model';

@Injectable()
export class PostService {
  postChanged = new Subject<Post[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'posts'; // URL to web api
  private posts: Post[] = [];

  constructor(private http: Http) {
  }

  getAll(): Promise<Post[]> {
    console.log('Fetch posts from the server');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.posts = response.json() as Post[];
        return this.posts;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

}
