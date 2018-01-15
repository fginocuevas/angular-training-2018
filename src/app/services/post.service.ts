import { Post } from './../models/post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class PostService {

  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() : Observable<any> {
    
    return this.http.get(this.postsUrl);

  }

  createPost(post: Post): Observable<any> {
    return this.http.post(this.postsUrl, post);
  }

  getPost(id: number): Observable<any>{
    return this.http.get(this.postsUrl + "/" + id);
  }

}
