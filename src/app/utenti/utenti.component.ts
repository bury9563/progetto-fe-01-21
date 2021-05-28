import { Component, OnInit } from '@angular/core';
import { UtentiGetService } from '../_services/utenti-service'

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.css']
})
export class UtentiComponent implements OnInit {

  constructor(
    public utentiService: UtentiGetService,
  ) { }

  utenti:any;

  ngOnInit(): void {
    this.getUtenti()
  }

  getUtenti() {
    this.utentiService.getUtenti()
    .subscribe(
      response => {
        this.utenti = response;
        console.log(this.utenti)
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    )
  }

  pageChange(nPagina){
    //console.log(nPagina)
    this.utentiService.pageChange(nPagina);
    this.ngOnInit()
  }
}
