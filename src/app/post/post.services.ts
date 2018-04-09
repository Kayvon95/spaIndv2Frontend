import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Post} from '../model/post.model';
import {post} from 'selenium-webdriver/http';

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


  // Get single post by ID
  getPost(id: string): Promise<Post> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Post;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  // Find posts by user id
  public getPostsFromUser(id: string): Promise<Post[]> {
    return this.http.get('users/' + id + '/post', { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Post[];
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  // Add post
  public addPost(post: Post) {
    return this.http.post(this.serverUrl, post, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.log(post);
        console.dir(response.toString());
        return response.toString() as string;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  // Save post
  public savePosts(posts: Post) {
    return this.http.post(
      this.serverUrl, posts, { headers: this.headers }
    );
  }
  // Edit post
  public editPost(id: string, post: Post) {
    return this.http.put(
      this.serverUrl + '/' + id, post, { headers: this.headers }
    );
  }
  // Delete
  public deletePost(id: string) {
    return this.http.delete(
      this.serverUrl + '/' + id, { headers: this.headers }
    );
  }
}
