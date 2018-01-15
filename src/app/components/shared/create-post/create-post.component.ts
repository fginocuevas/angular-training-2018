import { PostService } from './../../../services/post.service';
import { Post } from './../../../models/post.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Output() onCreatePost= new EventEmitter<boolean>();
  post: Post;

  constructor(private postSvc: PostService) {
    this.post= new Post();
  }

  ngOnInit() {
  }

  createPost(): void{
    // TODO: create post here
    console.log(this.post.title + " " + this.post.body);
    this.post.userId= 999;
    this.postSvc.createPost(this.post).subscribe(
      (data) => {
        this.onCreatePost.emit(true);
      }
    );
  }

}
