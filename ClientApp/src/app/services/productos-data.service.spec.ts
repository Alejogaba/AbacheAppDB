import { TestBed } from '@angular/core/testing';

import { ProductosDataService } from './productos-data.service';

describe('ProductosDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductosDataService = TestBed.get(ProductosDataService);
    expect(service).toBeTruthy();
  });
});
