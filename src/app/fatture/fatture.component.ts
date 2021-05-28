import { Component, OnInit } from '@angular/core';
import { FattureService } from '../_services/fattureService';
import { ClientiService } from '../_services/clientiService';
import { MyHttpInterceptor } from '../_services/interceptor';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.css']
})
export class FattureComponent implements OnInit {

  constructor(
    public fattureService: FattureService,
    public clientiService: ClientiService,
  ) { }

  fatture:any;
  page:number;

  ngOnInit(): void {
    this.clientiService.resetPageClienti()
    this.getFatture();
  }

  getFatture() {
    this.fattureService.fattureGet()
    .subscribe(
      response => {
        this.fatture = response;
        this.page = this.fatture.pageable.pageNumber + 1;
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    )
  }

  pageChange(nPagina){
    //console.log(nPagina)
    this.fattureService.pageChange(nPagina)
    this.getFatture();
  }

  elimina(id) {
    let c = confirm("Rimuovere ID " + id + "?")
    if (c == true) {
      this.fattureService.fatturaDelete(id)
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
