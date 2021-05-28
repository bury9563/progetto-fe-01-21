import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FattureService {

  constructor( private myHttp: HttpClient ) { }

  pagina:number = 0;
  fatture = `https://epicode.online/epicodebeserviceunauth/api/fatture?page=1&size=20&sort=id,ASC`;
  id:number=0;
  clienti:string;

  pageChange(nPagina) {
    this.pagina = nPagina - 1;
    this.fatture = `https://epicode.online/epicodebeserviceunauth/api/fatture?page=${nPagina - 1}&size=20&sort=id,ASC`;
    console.log(this.fatture)
  }

  pageReset () {
    this.pagina = 0;
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////// GET ///////////////////////////////////////////////////

  fattureGet() {
    return this.myHttp.get(`https://epicode.online/epicodebeservice/api/fatture?page=${this.pagina}&size=20&sort=id,ASC`)
  }

  // ---------------------------------------------------------------------------------------------------------------------

  fatturaGet() {
    this.fatture = `https://epicode.online/epicodebeservice/api/fatture?page=${this.pagina}&size=20&sort=id,ASC`
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////// DELETE /////////////////////////////////////////////////////////////////////////////

  fatturaDelete(id){
    let url = `https://epicode.online/epicodebeserviceunauth/api/fatture/${id}`
    return this.myHttp.delete(url)
  };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////// PUT //////////////////////////////////////////////////////////////////

  fatturaPut(id, fattura, data, numero, anno, importo, idStatoFattura, nomeStatoFattura) {
    //console.log( 'id put = ' + this.id)
    let url = `https://epicode.online/epicodebeserviceunauth/api/fatture/${id}`
    const dati = 
    {
      anno : anno,
      data : data,
      id : fattura.id,
      importo : importo,
      numero : numero,
      stato: {
        id: idStatoFattura,
        nome: nomeStatoFattura
      },
      cliente : {
        id: fattura.cliente.id, 
        ragioneSociale: fattura.cliente.ragioneSociale,
        partitaIva: fattura.cliente.partitaIva,
        tipoCliente: fattura.cliente.tipoCliente,
        email: fattura.cliente.email,
        pec: fattura.cliente.pec,
        telefono: fattura.cliente.telefono,
        nomeContatto: fattura.cliente.nomeContatto,
        cognomeContatto: fattura.cliente.cognomeContatto,
        telefonoContatto: fattura.cliente.telefonoContatto,
        emailContatto: fattura.cliente.emailContatto,
        indirizzoSedeOperativa: {
            id: fattura.cliente.indirizzoSedeOperativa.id,
            via: fattura.cliente.indirizzoSedeOperativa.via,
            civico: fattura.cliente.indirizzoSedeOperativa.civico,
            cap: fattura.cliente.indirizzoSedeOperativa.cap,
            localita: fattura.cliente.indirizzoSedeOperativa.localita,
            comune:{
                id: fattura.cliente.indirizzoSedeOperativa.comune.id,
                nome: fattura.cliente.indirizzoSedeOperativa.comune.nome,
                provincia: {
                  id: fattura.cliente.indirizzoSedeOperativa.comune.provincia.id,
                  nome: fattura.cliente.indirizzoSedeOperativa.comune.provincia.nome,
                  sigla: fattura.cliente.indirizzoSedeOperativa.comune.provincia.sigla,
                }
            }
        },
        indirizzoSedeLegale: {
          id: fattura.cliente.indirizzoSedeLegale.id,
          via: fattura.cliente.indirizzoSedeLegale.via,
          civico: fattura.cliente.indirizzoSedeLegale.civico,
          cap: fattura.cliente.indirizzoSedeLegale.cap,
          localita: fattura.cliente.indirizzoSedeLegale.localita,
          comune: {
              id: fattura.cliente.indirizzoSedeLegale.comune.id,
              nome: fattura.cliente.indirizzoSedeLegale.comune.nome,
              provincia: {
                  id: fattura.cliente.indirizzoSedeLegale.comune.provincia.id,
                  nome: fattura.cliente.indirizzoSedeLegale.comune.provincia.nome,
                  sigla: fattura.cliente.indirizzoSedeLegale.comune.provincia.sigla
              }
          }
        },
        dataInserimento: fattura.cliente.dataInserimento,
        dataUltimoContatto: fattura.cliente.dataUltimoContatto,
        fatturatoAnnuale: fattura.cliente.fatturatoAnnuale
      }
    };
    console.log(dati);
    return this.myHttp.put(url, dati)
  };
}