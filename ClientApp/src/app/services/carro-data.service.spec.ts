import { TestBed } from '@angular/core/testing';

import { CarroDataService } from './carro-data.service';

describe('CarroDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarroDataService = TestBed.get(CarroDataService);
    expect(service).toBeTruthy();
  });
});
