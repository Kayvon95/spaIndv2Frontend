import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../model/post.model';
import {User} from '../../model/user.model';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
