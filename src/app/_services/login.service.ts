import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LogInService {

  constructor( 
    private myHttp: HttpClient,
     ) { }
  
  logIn(cliente){
    return this.myHttp.post("https://epicode.online/epicodebeserviceunauth/api/auth/login", cliente)
  };

  test(token) {
    console.log(token)
    let headers = new HttpHeaders({"Authorization":`Bearer ${token}`});
    return this.myHttp.get("https://epicode.online/epicodebeservice/api/clienti", {headers:headers})
  }
}
