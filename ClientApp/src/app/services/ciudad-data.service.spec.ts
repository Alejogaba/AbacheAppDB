import { TestBed } from '@angular/core/testing';

import { CiudadDataService } from './ciudad-data.service';

describe('CiudadDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CiudadDataService = TestBed.get(CiudadDataService);
    expect(service).toBeTruthy();
  });
});
