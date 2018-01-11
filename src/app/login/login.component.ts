import { Component, ViewChild } from '@angular/core'

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: [
        'login.component.css'
    ]
})

export class LoginComponent {
    title: string= "App Name";
    password: string= "";
    email: string= "francis.cuevas@abc.com.ph";
    

    @ViewChild('emailInput') emailElement;

    submitLogin($event){
        console.log("My password is " + this.password);
        console.log($event);
        console.log(this.emailElement);
    }
}