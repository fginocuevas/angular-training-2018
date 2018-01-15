import { PostService } from './../../../services/post.service';
import { Post } from './../../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private postSvc: PostService) { }

  id: number;
  private sub: any;
  post: Post;

  ngOnInit() {
    this.sub= this.route.params.subscribe(
      params => {
        this.id= +params['id'];
        this.postSvc.getPost(this.id).subscribe(
          (data) => {
            this.post= data;
          }
        );
      }
    )
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
