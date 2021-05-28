import { Component, OnInit } from '@angular/core';
import { ClientiService } from '../../_services/clientiService'
import { Location } from '@angular/common'

@Component({
  selector: 'app-nuovo',
  templateUrl: './nuovo.component.html',
  styleUrls: ['./nuovo.component.css']
})
export class NuovoComponent implements OnInit {

  constructor(
    private clientiService: ClientiService,
    private location: Location,
  ) { }

  id; ragSoc; iva; tipoCliente; email; pec; telefono; nome; cognome; telefonoContatto; emailContatto; idSede; viaSede; 
  civicoSede; cap; localita; idComuneOperativo; nomeComune; idProvincia; nomeProvincia; siglaSedeOperativa; idSedeLegale; viaSedeLegale;
  civicoSedeLegale; capSedeLegale; localitaSedeLegale; idComuneLegale; nomeComuneLegale; idProvinciaLegale; 
  nomeProvinciaLegale; siglaSedeLegale; fatturato; dataInserimento;

  cliente:any;
  mese:any;
  anno:any;
  giorno:any;
  secondi:any;
  ora:any;
  minuti:any;
  mills:any;

  ngOnInit(): void {
  }

  back() {
    this.location.back();
  }

  setTipoCliente(value){
    this.tipoCliente = value;
  }

  setComuneOperativo(value){
    this.idComuneOperativo = value;
  }

  setComuneLegale(value){
    this.idComuneLegale = value;
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
      this.mese = "0"+month; 
    } else {
      this.mese = month;
    };
    if (g<10) {
      this.giorno = "0"+g; 
    } else {
      this.giorno = g
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
    this.anno = d.getFullYear();
    this.dataInserimento = this.anno+"-"+this.mese+"-"+this.giorno+"T"+this.ora+":"+this.minuti+":"+this.secondi+"."+this.mills;
    console.log(this.dataInserimento);
  }

  creaCliente(){
    this.getDataInserimento();
    let nuovoCliente = {
      id: 0, 
      ragioneSociale: this.ragSoc,
      partitaIva: this.iva,
      tipoCliente: this.tipoCliente,
      email: this.email,
      pec: this.pec,
      telefono: this.telefono,
      nomeContatto: this.nome,
      cognomeContatto: this.cognome,
      telefonoContatto: this.telefonoContatto,
      emailContatto: this.emailContatto,
      indirizzoSedeOperativa: {
          via: this.viaSede,
          civico: this.civicoSede,
          cap: this.cap,
          localita: this.localita,
          comune:{
              id: this.idComuneOperativo,
          }
      },
      indirizzoSedeLegale: {
        via: this.viaSedeLegale,
        civico: this.civicoSedeLegale,
        cap: this.capSedeLegale,
        localita: this.localitaSedeLegale,
        comune: {
            id: this.idComuneLegale,
        }
      },
      dataInserimento: this.dataInserimento,
      dataUltimoContatto: this.dataInserimento,
      fatturatoAnnuale: this.fatturato, 
    }
    console.log(nuovoCliente);
    this.clientiService.clientePost(nuovoCliente)
    .subscribe(
      response => {
        console.log(response);
      },
      error => console.error('error' + error),
      () => console.log("completo")
    )  
  }

}
