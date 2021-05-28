import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientiService } from '../../_services/clientiService';
import { Location } from '@angular/common'

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css'],
})
export class ModificaComponent implements OnInit {

  constructor(
    private myActRoute : ActivatedRoute,
    public clientiService: ClientiService,
    private location: Location,
  ) { }

  public legaleIsCollapsed = true;
  public OpsIsCollapsed = true;
  id:any;
  clienti:any;
  cliente:any;
  token:any;
  
  idCliente; ragSoc; iva; tipoCliente; email; pec; telefono; nome; cognome; telefonoContatto; emailContatto; idSede; viaSede; 
  civicoSede; cap; localita; idComune; nomeComune; idProvincia; nomeProvincia; siglaSedeOperativa; idSedeLegale; viaSedeLegale;
  civicoSedeLegale; capSedeLegale; localitaSedeLegale; idComuneLegale; nomeComuneLegale; idProvinciaLegale; 
  nomeProvinciaLegale; siglaSedeLegale; fatturato;
  

  ngOnInit(): void {
    this.token = localStorage.getItem("Token");
    this.myActRoute.params.subscribe (
      params => { 
      this.id = +params['id'];
    });
    this.getClienti();
  }

  back() {
    this.location.back();
  }

  getClienti() {
    this.clientiService.getClienti(this.token)
    .subscribe(
      response => {
        this.clienti = response;
        console.log(this.clienti);
        this.cliente = this.clienti.content.find( ({ id }) => id == this.id );
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
        console.log(this.cliente)
        
      },
      error => console.error('Errore ' + error),
      () => console.log("completo")
    );
  }

  putEdit(){
    this.clientiService.clientiPut(this.id, this.idCliente, this.ragSoc, this.iva, this.tipoCliente, this.email, this.pec, this.telefono, this.nome, this.cognome, this.telefonoContatto, this.emailContatto, this.idSede, this.viaSede, 
      this.civicoSede, this.cap, this.localita, this.idComune, this.nomeComune, this.idProvincia, this.nomeProvincia, this.siglaSedeOperativa, this.idSedeLegale, this.viaSedeLegale,
      this.civicoSedeLegale, this.capSedeLegale, this.localitaSedeLegale, this.idComuneLegale, this.nomeComuneLegale, this.idProvinciaLegale, 
      this.nomeProvinciaLegale, this.siglaSedeLegale, this.cliente, this.token, this.fatturato)
    .subscribe(
      response => {
        console.log(JSON.stringify(response));
        console.log(response);
      },
      error => console.error('error' + error),
      () => console.log("completo")
    )
  }

  TESTbtn(){
    console.log(this.clienti)
    console.log(this.clienti.content.find( ({ id }) => id === this.id ))
    console.log(this.cliente)
    console.log(this.cliente.indirizzoSedeOperativa.id)
  }

}
