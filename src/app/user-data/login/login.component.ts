import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  constructor(private authenticationService: AuthServiceService) { }

  ngOnInit(): void {
  }

  onLogin(formValue: any) {

    if (JSON.stringify(formValue) != window.sessionStorage.getItem("newUser")) {
      alert("Sorry :( , Email or Password isn't Correct. \nTry Again!")
    } else {
      this.authenticationService.userLogin();
      window.sessionStorage.setItem('user', JSON.stringify(formValue));
      alert("Hi :) !");
    }
  }

}
