import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SignUpService {

  constructor( private myHttp: HttpClient ) { }
  
  userPost(cliente){
    return this.myHttp.post("https://epicode.online/epicodebeserviceunauth/api/auth/signup", cliente)
  };
}