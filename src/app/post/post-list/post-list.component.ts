import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from '../post.services';
import {Post} from '../../model/post.model';
import {Subscription} from 'rxjs/Subscription';
import {Params, Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  constructor(private postService: PostService, private router: Router) { }
  posts: Post[];
  id: string;
  originalposter = false;
  subscription: Subscription;

  // ngOnInit() {
  //   this.subscription = this.postService.postChanged
  //     .subscribe(
  //       (params: Params) => {
  //         this.id = params['id'];
  //         this.originalposter = params['id'] != null;
  //         if (this.originalposter) {
  //           this.postService.getPostsFromUser(this.id)
  //             .then(posts => this.posts = posts)
  //             .catch(error => console.log(error));
  //         } else {
  //           this.postService.getAll()
  //             .then(posts => {
  //               this.posts = posts;
  //             })
  //             .catch(error => console.log(error));
  //         }
  //       }
  //     );
  // }

  ngOnInit() {
    this.subscription = this.postService.postChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.postService.getAll()
      .then(posts => {
        this.posts = posts;
      })
      .catch(error => console.log(error));
  }
  AddPost() {
    this.router.navigate(['/posts/create']);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
