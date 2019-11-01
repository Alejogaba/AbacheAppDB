import { TestBed } from '@angular/core/testing';

import { CategoriasDataService } from './categorias-data.service';

describe('CategoriasDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriasDataService = TestBed.get(CategoriasDataService);
    expect(service).toBeTruthy();
  });
});
