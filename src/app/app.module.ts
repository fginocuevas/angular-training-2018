import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { CustomHighlightDirective } from './directives/custom-highlight.directive';
import { RoutingModule } from './routing.module';
import { TestComponent } from './test/test.component';
import { PostService } from './services/post.service';
import { HttpClientModule} from '@angular/common/http';
import { PostItemComponent } from './components/post/post-item/post-item.component';
import { CreatePostComponent } from './components/shared/create-post/create-post.component';
import { PostDetailComponent } from './components/shared/post-detail/post-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    ContactComponent,
    CustomHighlightDirective,
    NavbarComponent,
    TestComponent,
    PostItemComponent,
    CreatePostComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
