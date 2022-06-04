import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedagemCompraComponent } from './hospedagem-compra.component';

describe('HospedagemCompraComponent', () => {
  let component: HospedagemCompraComponent;
  let fixture: ComponentFixture<HospedagemCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HospedagemCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HospedagemCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
