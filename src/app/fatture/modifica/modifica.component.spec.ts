import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaFattureComponent } from './modifica.component';

describe('ModificaComponent', () => {
  let component: ModificaFattureComponent;
  let fixture: ComponentFixture<ModificaFattureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificaFattureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaFattureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
