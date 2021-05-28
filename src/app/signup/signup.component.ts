import { Component, OnInit } from '@angular/core';
import { SignUpService } from "../_services/signup-service"
import { Location } from '@angular/common'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    public signupService: SignUpService,
    private location: Location,
  ) { }

  username;
  email;
  password;
  nome;
  cognome;
  permessi;

  ngOnInit(): void {
  }

  back() {
    this.location.back()
  }

  setPermessi(value) {
    if (value == 1) {
      this.permessi = "ROLE_USER"
    } else if (value == 2) {
      this.permessi = "ROLE_ADMIN"
    }
    console.log(this.permessi)
  }

  registra() {
    let user = {
      username: this.username,
      email: this.email,
      password: this.password,
      nome: this.nome,
      cognome: this.cognome,
      roles: [{
        id: this.permessi,
      }]
    };
    this.signupService.userPost(user)
    .subscribe(
      response => {
        console.log(response);
      },
      error => console.error('error' + error),
      () => console.log("completo")
    )
  }
}
