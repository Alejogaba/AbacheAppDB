import { TestBed } from '@angular/core/testing';

import { UsuariosDataService } from './usuarios-data.service';

describe('UsuariosDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosDataService = TestBed.get(UsuariosDataService);
    expect(service).toBeTruthy();
  });
});
