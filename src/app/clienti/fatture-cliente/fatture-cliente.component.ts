import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../../_services/clientiService';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-fatture-cliente',
  templateUrl: './fatture-cliente.component.html',
  styleUrls: ['./fatture-cliente.component.css']
})
export class FattureClienteComponent implements OnInit {

  id:any;
  fatture:any;
  page:number = 1;
  token;
  
  TEST() {
    console.log(this.page)
  }

  constructor(
    public clientiService: ClientiService,
    private myActRoute : ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.page = 1;
    this.token = localStorage.getItem("Token");
    this.myActRoute.params.subscribe (
      params => { 
      this.id = +params['id'];
      console.log(params)
    });
    this.getFatture();
  }

  back() {
    this.location.back()
  }

  getFatture() {
    this.clientiService.getFattureCliente(this.id, this.token)
    .subscribe(
      response => {
        this.fatture = response;
        console.log(this.fatture)
        this.page = this.fatture.pageable.pageNumber + 1;
        console.log("yyyyy " + this.id)
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    );
  }

  pageChange(nPagina){
    //console.log(nPagina)
    this.clientiService.pageChangeFatture(nPagina)
    this.getFatture();
  }

  elimina(id) {
    let c = confirm("Rimuovere ID " + id + "?")
    if (c == true) {
      this.clientiService.fatturaDelete(id)
      .subscribe(
        response => {
          console.log(response);
        },
        error => console.error(error),
        () => window.location.reload()
      );
    } else {
      console.log("Operazione annullata")
    }
  }
}
