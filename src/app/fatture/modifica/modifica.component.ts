import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FattureService } from '../../_services/fattureService'
import { Location } from '@angular/common'

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaFattureComponent implements OnInit {

  constructor(
    private myActRoute : ActivatedRoute,
    private fattureService : FattureService,
    private location: Location,
  ) { }

  

  id;
  fatture:any;
  fattura:any;

  cliente:any;
  anno:any;
  data:any;
  fatturaId:any;
  importo:any;
  numero:any;
  idStatoFattura:any;
  model:any;
  giornoFat:any;
  meseFat:any;
  annoFat:any;
  dataFattura:any;
  year:any;
  month:any;
  day:any;
  nomeStatoFattura:any;

  ngOnInit(): void {
    this.myActRoute.params.subscribe (
      params => { 
      this.id = +params['id'];
      console.log("ID "+this.id)
    });
    this.getFattura();
  }

  back() {
    this.location.back()
  }

  setStatoFattura(value){
    this.idStatoFattura = value;
    if (value == 1) {
      this.nomeStatoFattura = "PAGATA";
    } else if (value == 2) {
      this.nomeStatoFattura = "NON PAGATA"
    }
    console.log(this.nomeStatoFattura, this.idStatoFattura)
  }

  getDataFattura() {
    console.log(this.model)
    let d:number = this.model.day;
    let m:number = this.model.month;
    if (d<10) {
      this.giornoFat = "0"+m; 
    } else {
      this.giornoFat = d;
    }
    if (m<10) {
      this.meseFat = "0"+m; 
    } else {
      this.meseFat = m
    }
    this.annoFat = this.model.year;
    this.data = this.annoFat+"-"+this.meseFat+"-"+this.giornoFat;
    console.log(this.data)
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////// GET ///////////////////////////////////////////////////////////

  getFattura() {
    this.fattureService.fattureGet()
    .subscribe(
      response => {
        this.fatture = response;
        console.log(this.fatture);
        this.fattura = this.fatture.content.find( ({ id }) => id == this.id );
        console.log(this.fattura.cliente.id)
        this.anno = this.fattura.anno;
        this.numero = this.fattura.numero;
        this.importo = this.fattura.importo;
        this.dataFattura = this.fattura.data;
        this.year = parseInt(this.dataFattura.split("T")[0].split("-")[0]);
        this.month = parseInt(this.dataFattura.split("T")[0].split("-")[1]);
        this.day = parseInt(this.dataFattura.split("T")[0].split("-")[2]);
        this.model = {
          year: this.year,
          month: this.month,
          day: this.day,
        }
        this.nomeStatoFattura = this.fattura.stato.nome;    
        this.idStatoFattura = this.fattura.stato.id;    
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    );
  }

  ////////////////////////////// PUT ///////////////////////////////// 

  putFattura(){
    this.getDataFattura();
    this.fattureService.fatturaPut(this.id, this.fattura, this.data, this.numero, this.anno, this.importo, this.idStatoFattura, this.nomeStatoFattura)
    .subscribe(
      response => {
        console.log(response);
      },
      error => console.error(error),
      () => console.log("completo")
    )
  }
}


