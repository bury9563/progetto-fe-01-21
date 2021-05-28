import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from '../../../_services/clientiService';
import { Location } from '@angular/common'

@Component({
  selector: 'app-nuova-fattura-cliente',
  templateUrl: './nuova-fattura-cliente.component.html',
  styleUrls: ['./nuova-fattura-cliente.component.css']
})
export class NuovaFatturaClienteComponent implements OnInit {

  constructor(
    public clientiGet: ClientiService,
    private myActRoute : ActivatedRoute,
    private location: Location,
  ) { }

  id:any;
  cliente:any;
  model;
  meseIns; 
  giornoIns; 
  ora;
  minuti;
  secondi;
  mills;
  annoIns;
  meseFat;
  annoFat;
  giornoFat;

  idCliente; ragSoc; iva; tipoCliente; email; pec; telefono; nome; cognome; telefonoContatto; emailContatto; idSede; viaSede; 
  civicoSede; cap; localita; idComune; nomeComune; idProvincia; nomeProvincia; siglaSedeOperativa; idSedeLegale; viaSedeLegale;
  civicoSedeLegale; capSedeLegale; localitaSedeLegale; idComuneLegale; nomeComuneLegale; idProvinciaLegale; 
  nomeProvinciaLegale; siglaSedeLegale; anno; dataFattura; importo; fatturaId; numero; idStatoFattura; statoFattura;
  fatturato; dataInserimento;

  ngOnInit(): void {
    this.myActRoute.params.subscribe (
      params => { 
      this.id = +params['id'];
      console.log(this.id)
    });
    this.getCliente();
  }

  back() {
    this.location.back()
  }

  test() {
    console.log(this.model)
  }

  setStatoFattura(value){
    this.idStatoFattura = value;
    if (value == 1) {
      this.statoFattura = "PAGATA";
    } else if (value == 2) {
      this.statoFattura = "NON PAGATA"
    }
    console.log(this.statoFattura, this.idStatoFattura)
  }

  getDataInserimento() {
    let d = new Date();
    let month:number = d.getMonth() + 1;
    let g:number = d.getDate();
    let h:number = d.getHours();
    let minutes:number = d.getMinutes();
    let s:number =  d.getSeconds();
    let mills = d.getMilliseconds();
    if (month<10) {
      this.meseIns = "0"+month; 
    } else {
      this.meseIns = month;
    };
    if (g<10) {
      this.giornoIns = "0"+g; 
    } else {
      this.giornoIns = g
    };
    if (h<10) {
      this.ora = "0"+h; 
    } else {
      this.ora = h
    };
    if (minutes<10) {
      this.minuti = "0"+minutes; 
    } else {
      this.minuti = minutes
    };
    if (s<10) {
      this.secondi = "0"+s; 
    } else {
      this.secondi = s
    };
    if (mills<10) {
      this.mills = "0"+mills; 
    } else {
      this.mills = mills
    };
    this.annoIns = d.getFullYear();
    this.dataInserimento = this.annoIns+"-"+this.meseIns+"-"+this.giornoIns+"T"+this.ora+":"+this.minuti+":"+this.secondi+"."+this.mills;
    console.log(this.dataInserimento);
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
    this.dataFattura = this.annoFat+"-"+this.meseFat+"-"+this.giornoFat;
    console.log(this.dataFattura)
  }





  /////////////// GET CLIENTE ///////////////// 

  getCliente() {
    this.clientiGet.getClienteFattura(this.id)
    .subscribe(
      response => {
        this.cliente = response;
        console.log(this.cliente);
        this.idCliente = this.cliente.id; 
        this.ragSoc = this.cliente.ragioneSociale; 
        this.iva = this.cliente.partitaIva; 
        this.tipoCliente = this.cliente.tipoCliente; 
        this.email = this.cliente.email; 
        this.pec = this.cliente.pec; 
        this.telefono = this.cliente.telefono;
        this.nome = this.cliente.nomeContatto; 
        this.cognome = this.cliente.cognomeContatto; 
        this.telefonoContatto = this.cliente.telefonoContatto; 
        this.emailContatto = this.cliente.emailContatto; 
        this.idSede = this.cliente.indirizzoSedeOperativa.id; 
        this.viaSede = this.cliente.indirizzoSedeOperativa.via; 
        this.civicoSede = this.cliente.indirizzoSedeOperativa.civico; 
        this.cap = this.cliente.indirizzoSedeOperativa.cap; 
        this.localita = this.cliente.indirizzoSedeOperativa.localita; 
        this.idComune = this.cliente.indirizzoSedeOperativa.comune.id; 
        this.nomeComune = this.cliente.indirizzoSedeOperativa.comune.nome; 
        this.idProvincia = this.cliente.indirizzoSedeOperativa.comune.provincia.id; 
        this.nomeProvincia = this.cliente.indirizzoSedeOperativa.comune.provincia.nome;
        this.siglaSedeOperativa = this.cliente.indirizzoSedeOperativa.comune.provincia.sigla; 
        this.idSedeLegale = this.cliente.indirizzoSedeLegale.id; 
        this.viaSedeLegale = this.cliente.indirizzoSedeLegale.via;
        this.civicoSedeLegale = this.cliente.indirizzoSedeLegale.civico; 
        this.capSedeLegale = this.cliente.indirizzoSedeLegale.cap; 
        this.localitaSedeLegale = this.cliente.indirizzoSedeLegale.localita; 
        this.idComuneLegale = this.cliente.indirizzoSedeLegale.comune.id; 
        this.nomeComuneLegale = this.cliente.indirizzoSedeLegale.comune.nome; 
        this.idProvinciaLegale = this.cliente.indirizzoSedeLegale.comune.provincia.id; 
        this.nomeProvinciaLegale = this.cliente.indirizzoSedeLegale.comune.provincia.nome; 
        this.siglaSedeLegale = this.cliente.indirizzoSedeLegale.comune.provincia.sigla;
        this.fatturato = this.cliente.fatturatoAnnuale;
        console.log(this.idCliente, this.ragSoc)
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    );
  }

  ////////////////////// POST //////////////////////////////////////////

  postFattura() {
    this.getDataFattura();
    this.getDataInserimento();
    this.clientiGet.fatturaPost(this.idCliente, this.ragSoc, this.iva, this.tipoCliente, this.email, this.pec, this.telefono, this.nome, this.cognome, this.telefonoContatto, this.emailContatto, this.idSede, this.viaSede, 
      this.civicoSede, this.cap, this.localita, this.idComune, this.nomeComune, this.idProvincia, this.nomeProvincia, this.siglaSedeOperativa, this.idSedeLegale, this.viaSedeLegale,
      this.civicoSedeLegale, this.capSedeLegale, this.localitaSedeLegale, this.idComuneLegale, this.nomeComuneLegale, this.idProvinciaLegale, 
      this.nomeProvinciaLegale, this.siglaSedeLegale, this.fatturato, this.anno, this.dataFattura, this.importo, this.fatturaId, this.numero, this.idStatoFattura, this.statoFattura, this.dataInserimento)
      .subscribe(
        response => {
          console.log(response);
        },
        error => console.error(error),
        () => console.log("completo")
      )
    }

}
