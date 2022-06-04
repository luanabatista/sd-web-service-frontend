import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassagemAereaComponent } from '../passagem-aerea/passagem-aerea.component';
import { PassagemAereaCompraComponent } from './passagem-aerea-compra.component';

describe('PassagemAereaCompraComponent', () => {

  let component: PassagemAereaCompraComponent;
  let fixture: ComponentFixture<PassagemAereaCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagemAereaCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemAereaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
