import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './_guards/auth.guard';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UtentiComponent } from './utenti/utenti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
import { FattureClienteComponent } from './clienti/fatture-cliente/fatture-cliente.component';
import { ModificaComponent } from './clienti/modifica/modifica.component';
import { NuovoComponent } from './clienti/nuovo/nuovo.component';
import { ModificaFattureComponent } from './fatture/modifica/modifica.component';
import { NuovaFatturaClienteComponent } from './clienti/fatture-cliente/nuova-fattura-cliente/nuova-fattura-cliente.component'
import { ModificaFatturaClienteComponent }  from './clienti/fatture-cliente/modifica-fattura-cliente/modifica-fattura-cliente.component'
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'utenti', component: UtentiComponent,canActivate:[AuthGuard] },
  { path: 'clienti', component: ClientiComponent,canActivate:[AuthGuard] },
  { path: 'fatture', component: FattureComponent,canActivate:[AuthGuard] },
  { path: 'clienti/fattureCliente/:id', component: FattureClienteComponent },
  { path: 'clienti/modifica/:id', component: ModificaComponent },
  { path: 'clienti/nuovo', component: NuovoComponent },
  { path: 'fatture/edit/:id', component: ModificaFattureComponent },
  { path: 'clienti/fattureCliente/nuova-fattura-cliente/:id', component: NuovaFatturaClienteComponent },
  { path: 'clienti/fattureCliente/modifica-fattura-cliente/:id', component: ModificaFatturaClienteComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
