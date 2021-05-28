import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaFatturaClienteComponent } from './nuova-fattura-cliente.component';

describe('NuovaFatturaClienteComponent', () => {
  let component: NuovaFatturaClienteComponent;
  let fixture: ComponentFixture<NuovaFatturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaFatturaClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuovaFatturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
