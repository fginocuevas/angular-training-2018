import { PostDetailComponent } from './components/shared/post-detail/post-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { BlogComponent } from './components/blog/blog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const appRoutes : Routes = [
  {
    path: "blog", 
    component: BlogComponent,
    children: [
      
    ]
  },
  {path: "blog/post/:id", component: PostDetailComponent},
  {path: "login", component: LoginComponent},
  {path: "contact", component: ContactComponent},
  {path: "", redirectTo:"/login", pathMatch: "full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
