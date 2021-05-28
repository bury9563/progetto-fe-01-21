import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ClientiService {

  constructor( private myHttp: HttpClient ) { }

  paginaClienti:number = 0;
  paginaFatture:number = 0;

  fattureCliente:any;
  clienti = `https://epicode.online/epicodebeserviceunauth/api/clienti?page=0&size=20&sort=id,ASC`;

  pageChangeFatture(nPagina) {
    this.paginaFatture = nPagina - 1;
  };

  pageChangeClienti(nPagina) {
    this.paginaClienti = nPagina - 1;
  };

  resetPageFatture() {
    this.paginaFatture = 0;
  };

  resetPageClienti() {
    this.paginaClienti = 0;
  };

  test() {
    return localStorage.getItem("Token")
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////GET/////////////////////////////////////////////////////////////////

  getClienti(token) {
    let url = `https://epicode.online/epicodebeservice/api/clienti?page=${this.paginaClienti}&size=20&sort=id,ASC`
    return this.myHttp.get(url)
  };

  // -------------------------------------------------------------------------------------------------------------------

  getClienteFattura(id) {
    return this.myHttp.get(`https://epicode.online/epicodebeservice/api/clienti/${id}`)
  };

  // -------------------------------------------------------------------------------------------------------------------------
  
  getFattureCliente(id, token) {
    let headers = new HttpHeaders({"Authorization":`Bearer ${token}`});
    let url = `https://epicode.online/epicodebeservice/api/fatture/cliente/${id}/?page=${this.paginaFatture}&size=20&sort=id,ASC`;
    console.log(url)
    return this.myHttp.get(url, {headers:headers})
  };

  // -----------------------------------------------------------------------------------------------------------------------------

  getFatturaCliente(id) {
    let url = `https://epicode.online/epicodebeservice/api/fatture/${id}`;
    return this.myHttp.get(url)
  };

  ////////////////////////////////////////////////////////////////////////////
  //////////////////////////////// DELETE //////////////////////////////////

  fatturaDelete(id) {
    let url = `https://epicode.online/epicodebeserviceunauth/api/fatture/${id}`
    return this.myHttp.delete(url);
  }

  // --------------------------------------------------------------------------------------------------------------------

  clienteDelete(id) {
    let url = `https://epicode.online/epicodebeserviceunauth/api/clienti/${id}`
    return this.myHttp.delete(url);
  }

  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////// PUT /////////////////////////////////////////////////

  fatturaPut(id, fattura, data, numero, anno, importo, idStatoFattura, nomeStatoFattura) {
    let url = `https://epicode.online/epicodebeserviceunauth/api/fatture/${id}`;
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

  // ----------------------------------------------------------------------------------------------------------------------------------------------------------

  clientiPut(id, idCliente, ragSoc, iva, tipoCliente, email, pec, telefono, nome, cognome, telefonoContatto, emailContatto, idSede, viaSede, 
    civicoSede, cap, localita, idComune, nomeComune, idProvincia, nomeProvincia, siglaSedeOperativa, idSedeLegale, viaSedeLegale,
    civicoSedeLegale, capSedeLegale, localitaSedeLegale, idComuneLegale, nomeComuneLegale, idProvinciaLegale, 
    nomeProvinciaLegale, siglaSedeLegale, cliente, token, fatturato) {
    //console.log( 'id put = ' + this.id)
    let url = `https://epicode.online/epicodebeserviceunauth/api/clienti/${id}`
    console.log(this.clienti)
    const dati = {
      id: idCliente, 
      ragioneSociale: ragSoc,
      partitaIva: iva,
      tipoCliente: tipoCliente,
      email: email,
      pec: pec,
      telefono: telefono,
      nomeContatto: nome,
      cognomeContatto: cognome,
      telefonoContatto: telefonoContatto,
      emailContatto: emailContatto,
      indirizzoSedeOperativa: {
          id: idSede,
          via: viaSede,
          civico: civicoSede,
          cap: cap,
          localita: localita,
          comune:{
              id: idComune,
              nome: nomeComune,
              provincia: {
                id: idProvincia,
                nome: nomeProvincia,
                sigla: siglaSedeOperativa,
              }
          }
      },
      indirizzoSedeLegale: {
        id: idSedeLegale,
        via: viaSedeLegale,
        civico: civicoSedeLegale,
        cap: capSedeLegale,
        localita: localitaSedeLegale,
        comune: {
            id: idComuneLegale,
            nome: nomeComuneLegale,
            provincia: {
                id: idProvinciaLegale,
                nome: nomeProvinciaLegale,
                sigla: siglaSedeLegale
            }
        }
      },
      dataInserimento: cliente.dataInserimento,
      dataUltimoContatto: cliente.dataUltimoContatto,
      fatturatoAnnuale: fatturato,
    };
    console.log(dati);
    let headers = new HttpHeaders({"Authorization":`Bearer ${token}`});
    return this.myHttp.put(url, dati, {headers:headers})
  };


  ///////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////// POST ///////////////////////////////////////

  
  fatturaPost(idCliente, ragSoc, iva, tipoCliente, email, pec, telefono, nome, cognome, telefonoContatto, emailContatto, idSede, viaSede, 
    civicoSede, cap, localita, idComune, nomeComune, idProvincia, nomeProvincia, siglaSedeOperativa, idSedeLegale, viaSedeLegale,
    civicoSedeLegale, capSedeLegale, localitaSedeLegale, idComuneLegale, nomeComuneLegale, idProvinciaLegale, 
    nomeProvinciaLegale, siglaSedeLegale, fatturato, anno, data, importo, fatturaId, numero, idStatoFattura, statoFattura, dataInserimento) {
    //console.log( 'id put = ' + this.id)
    let urlFatture = `https://epicode.online/epicodebeserviceunauth/api/fatture`
    console.log(urlFatture)
    const dati = 
    {
      anno : anno,
      data : data,
      id : fatturaId,
      importo : importo,
      numero : numero,
      stato: {
        id: idStatoFattura,
        nome: statoFattura
      },
      cliente : {
        id: idCliente, 
        ragioneSociale: ragSoc,
        partitaIva: iva,
        tipoCliente: tipoCliente,
        email: email,
        pec: pec,
        telefono: telefono,
        nomeContatto: nome,
        cognomeContatto: cognome,
        telefonoContatto: telefonoContatto,
        emailContatto: emailContatto,
        indirizzoSedeOperativa: {
            id: idSede,
            via: viaSede,
            civico: civicoSede,
            cap: cap,
            localita: localita,
            comune:{
                id: idComune,
                nome: nomeComune,
                provincia: {
                  id: idProvincia,
                  nome: nomeProvincia,
                  sigla: siglaSedeOperativa,
                }
            }
        },
        indirizzoSedeLegale: {
          id: idSedeLegale,
          via: viaSedeLegale,
          civico: civicoSedeLegale,
          cap: capSedeLegale,
          localita: localitaSedeLegale,
          comune: {
              id: idComuneLegale,
              nome: nomeComuneLegale,
              provincia: {
                  id: idProvinciaLegale,
                  nome: nomeProvinciaLegale,
                  sigla: siglaSedeLegale
              }
          }
        },
        dataInserimento: dataInserimento,
        dataUltimoContatto: dataInserimento,
        fatturatoAnnuale: fatturato
      }
    };
    console.log(dati);
    return this.myHttp.post(urlFatture, dati)
  };

  clientePost(dati) {
    let url = "https://epicode.online/epicodebeserviceunauth/api/clienti";
    return this.myHttp.post(url, dati)
  }
}