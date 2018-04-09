import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {environment} from '../../environments/environment';
import {Comment} from '../model/comment.model';

@Injectable()
export class CommentService {
  commentChanged = new Subject<Comment[]>();

  private headers = new Headers({'Content-Type': 'application/json'});
  private serverUrl = environment.serverUrl + 'comments'; // URL to api
  private comments: Comment[] = [];

  constructor(private http: Http) {
  }

  getAll(): Promise<Comment[]> {
    console.log('Fetch comments from the server');
    return this.http.get(this.serverUrl, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        this.comments = response.json() as Comment[];
        return this.comments;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  // Get single comment by ID
  getComment(id: string): Promise<Comment> {
    return this.http.get(this.serverUrl + '/' + id, {headers: this.headers})
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Comment;
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }
  // Find comments by post id
  public getCommentFromPost(id: string): Promise<Comment[]> {
    return this.http.get('posts/' + id + '/comment', { headers: this.headers })
      .toPromise()
      .then(response => {
        console.dir(response.json());
        return response.json() as Comment[];
      })
      .catch(error => {
        console.log('handleError');
        return Promise.reject(error.message || error);
      });
  }

  // Save comment
  public saveComment(comments: Comment) {
    return this.http.post(
      this.serverUrl, comments, { headers: this.headers }
    );
  }
  // Edit comment
  public editComment (id: string, comment: Comment) {
    return this.http.put(
      this.serverUrl + '/' + id, comment, { headers: this.headers }
    );
  }
  // Delete
  public deleteComment(id: string) {
    return this.http.delete(
      this.serverUrl + '/' + id, { headers: this.headers }
    );
  }
}
