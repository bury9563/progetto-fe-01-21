import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../_services/clientiService';
import { FattureService } from '../_services/fattureService';
import { MyHttpInterceptor } from '../_services/interceptor';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.css']
})
export class ClientiComponent implements OnInit {

  constructor(
    public clientiService: ClientiService,
    public fattureService: FattureService,
  ) { }

  clienti:any;
  page:number = 1;
  token;
  nPagina;

  ngOnInit(): void {
    this.fattureService.pageReset();
    this.clientiService.resetPageFatture();
    this.token = localStorage.getItem("Token");
    this.getClienti();
  }

  pageChange(nPagina){
    this.clientiService.pageChangeClienti(nPagina);
    this.getClienti();
    //console.log(this.nPagina)
  }

  getClienti() {
    this.clientiService.getClienti(this.token)
    .subscribe(
      response => {
        this.clienti = response;
        this.page = this.clienti.pageable.pageNumber + 1;
        console.log(this.clienti)
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    )
  }

  elimina(id) {
    let c = confirm("Rimuovere ID " + id + "?")
    if (c == true) {
      this.clientiService.clienteDelete(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => console.error(error),
        () => this.getClienti(),
      );
    } else {
      console.log("Operazione annullata")
    }
  }
}

