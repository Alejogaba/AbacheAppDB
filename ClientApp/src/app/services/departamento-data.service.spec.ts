import { TestBed } from '@angular/core/testing';

import { DepartamentoDataService } from './departamento-data.service';

describe('DepartamentoDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartamentoDataService = TestBed.get(DepartamentoDataService);
    expect(service).toBeTruthy();
  });
});
