import { TestBed } from '@angular/core/testing';

import { PassagemAereaService } from './passagem-aerea.service';

describe('PassagemAereaService', () => {
  let service: PassagemAereaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassagemAereaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
