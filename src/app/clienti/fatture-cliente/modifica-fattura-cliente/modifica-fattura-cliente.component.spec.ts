import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaFatturaClienteComponent } from './modifica-fattura-cliente.component';

describe('ModificaFatturaClienteComponent', () => {
  let component: ModificaFatturaClienteComponent;
  let fixture: ComponentFixture<ModificaFatturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaFatturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaFatturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
