import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Comment} from '../../model/comment.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostService} from '../../post/post.services';
import {CommentService} from '../comment.services';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.css']
})
export class CommentEditComponent implements OnInit {
  commentForm: FormGroup;
  editMode = false;
  id = '';
  editedComment: Comment;

  constructor(private router: Router,
              private commentService: CommentService,
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
    this.commentForm = new FormGroup({
      'content': new FormControl
    });
    if (this.editMode) {
      this.commentService.getComment(this.id)
        .then((comment) => {
          this.commentForm.setValue({
            content: comment.content,
          });
        })
        .catch(error => console.log(error));
    }
  }

  onSaveComment() {
    if (this.editMode) {
      this.commentService.editComment(this.id, this.commentForm.value)
        .subscribe(
          (response) => this.router.navigate(['/comments/list']),
          (error) => console.log(error)
        );
    } else {
      this.commentService.saveComment(this.commentForm.value)
        .subscribe(
          (response) => this.router.navigate(['/comments/list']),
          (error) => console.log(error)
        );
    }
  }

  onCancel() {
    this.router.navigate(['/comments/list']);
  }

  onDeleteComment() {
    this.commentService.deleteComment(this.id)
      .subscribe(
        (response) => this.router.navigate(['/']),
        (error) => console.log(error)
      );
  }
}
