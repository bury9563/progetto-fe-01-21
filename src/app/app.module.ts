import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyHttpInterceptor } from './_services/interceptor'
import { AuthGuard } from "./_guards/auth.guard";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtentiComponent } from './utenti/utenti.component';
import { ClientiComponent } from './clienti/clienti.component';
import { FattureComponent } from './fatture/fatture.component';
import { FattureClienteComponent } from './clienti/fatture-cliente/fatture-cliente.component';
import { ModificaComponent } from './clienti/modifica/modifica.component';
import { NuovoComponent } from './clienti/nuovo/nuovo.component';
import { ModificaFattureComponent } from './fatture/modifica/modifica.component';
import { NuovaFatturaClienteComponent } from './clienti/fatture-cliente/nuova-fattura-cliente/nuova-fattura-cliente.component';
import { ModificaFatturaClienteComponent } from './clienti/fatture-cliente/modifica-fattura-cliente/modifica-fattura-cliente.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UtentiComponent,
    ClientiComponent,
    FattureComponent,
    FattureClienteComponent,
    ModificaComponent,
    NuovoComponent,
    ModificaFattureComponent,
    NuovaFatturaClienteComponent,
    ModificaFatturaClienteComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: 
      MyHttpInterceptor, multi: true },
      AuthGuard,{ provide: LOCALE_ID, useValue: 'it'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
