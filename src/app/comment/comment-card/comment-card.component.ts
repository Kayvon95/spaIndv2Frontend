import {Component, Input, OnInit} from '@angular/core';
import {Comment} from '../../model/comment.model';
import {User} from '../../model/user.model';
import {Post} from '../../model/post.model';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {
  @Input() comment: Comment;
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
