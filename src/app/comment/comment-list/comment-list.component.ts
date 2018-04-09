import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from '../comment.services';
import {Subscription} from 'rxjs/Subscription';
import {Comment} from '../../model/comment.model';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {
  title = 'Comments';
  comments: Comment[];
  threadMode = false;
  id: string;

  private subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commentService: CommentService
  ) { }

  ngOnInit() {
    this.subscription = this.commentService.commentChanged
      .subscribe(
        (comments: Comment[]) => { this.comments = comments; });
    this.commentService.getAll()
      .then(comments => {
        this.comments = comments;
      })
      .catch(error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
