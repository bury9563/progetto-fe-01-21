import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UtentiGetService {

  constructor( private myHttp: HttpClient ) { }

  utenti = 'https://epicode.online/epicodebeserviceunauth/api/users?page=0&size=20&sort=id,ASC';

  getUtenti() {
    return this.myHttp.get(this.utenti)
  }

  pageChange(nPagina) {
    this.utenti = `https://epicode.online/epicodebeserviceunauth/api/users?page=${nPagina - 1}&size=20&sort=id,ASC`;
  }

}