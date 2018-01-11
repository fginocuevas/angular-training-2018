import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  firstName = 'Gino';
  lastName= 'Cuevas';
  position= '';

  getName(){
    return `${this.firstName} ${this.lastName}`;
  }
}
