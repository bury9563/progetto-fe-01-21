import { Component, OnInit } from '@angular/core';
import { LogInService } from '../_services/login.service'
import { Location } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public loginService: LogInService,
    private location: Location,
  ) { }

  username;
  password;
  response;

  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }

  logIn() {
    let data = {
      username: this.username,
      password: this.password
    };
    this.loginService.logIn(data)
    .subscribe(
      response => {
        this.response = response;
        console.log(this.response.accessToken)
        localStorage.setItem("Token", this.response.accessToken)
      },
      error => console.error('error' + error),
      () => console.log("completo")
    )
  }
}
