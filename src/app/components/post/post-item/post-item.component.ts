import { Post } from './../../../models/post.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
