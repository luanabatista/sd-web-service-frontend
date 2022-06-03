import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagemAereaComponent } from './passagem-aerea.component';

describe('PassagemAereaComponent', () => {
  let component: PassagemAereaComponent;
  let fixture: ComponentFixture<PassagemAereaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassagemAereaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassagemAereaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
