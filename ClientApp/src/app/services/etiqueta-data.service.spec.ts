import { TestBed } from '@angular/core/testing';

import { EtiquetaDataService } from './etiqueta-data.service';

describe('EtiquetaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtiquetaDataService = TestBed.get(EtiquetaDataService);
    expect(service).toBeTruthy();
  });
});
