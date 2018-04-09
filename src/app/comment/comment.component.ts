import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommentService} from './comment.services';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private commentService: CommentService
  ) { }

  ngOnInit() {
  }

}
