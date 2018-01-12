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
import { TestComponent } from './test/test.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent,
    ContactComponent,
    CustomHighlightDirective,
    NavbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
