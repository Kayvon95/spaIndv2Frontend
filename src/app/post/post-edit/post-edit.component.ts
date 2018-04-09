import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Post} from '../../model/post.model';
import {PostService} from '../post.services';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  postForm: FormGroup;
  editMode = false;
  id = '';
  editedPost: Post;
  constructor(private router: Router,
              private postService: PostService,
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
    this.postForm = new FormGroup({
      'title': new FormControl,
      'content': new FormControl,
      'tag': new FormControl
    });
    if (this.editMode) {
      this.postService.getPost(this.id)
        .then((post) => {
          this.postForm.setValue({
            title: post.title,
            content: post.content,
            tag: post.tag
          });
        })
        .catch(error => console.log(error));
    }

  }


  onSavePost() {
    if (this.editMode) {
      this.postService.editPost(this.id, this.postForm.value)
        .subscribe(
          (response) => this.router.navigate(['/posts/list']),
          (error) => console.log(error)
        );
    } else {
      this.postService.savePosts(this.postForm.value)
        .subscribe(
          (response) => this.router.navigate(['/posts/list']),
          (error) => console.log(error)
        );
    }
  }

  onCancel() {
    this.router.navigate(['/posts/list']);
  }


  onDeletePost() {
    this.postService.deletePost(this.id)
      .subscribe(
        (response) => this.router.navigate(['/']),
        (error) => console.log(error)
      );
  }

}
