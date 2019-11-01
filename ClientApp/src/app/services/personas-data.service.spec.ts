import { TestBed } from '@angular/core/testing';

import { PersonasDataService } from './personas-data.service';

describe('PersonasDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonasDataService = TestBed.get(PersonasDataService);
    expect(service).toBeTruthy();
  });
});
