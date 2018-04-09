import { Component, OnInit } from '@angular/core';
import {Post} from '../../model/post.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostService} from '../post.services';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;
  id: string;
  postview: false;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.postService.getPost(this.id)
            .then((post) => {
              this.post = post;
            })
            .catch(error => console.log(error));
        }
      );
  }

}
