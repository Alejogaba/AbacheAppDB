import { TestBed } from '@angular/core/testing';

import { FacturaDataService } from './factura-data.service';

describe('FacturaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacturaDataService = TestBed.get(FacturaDataService);
    expect(service).toBeTruthy();
  });
});
