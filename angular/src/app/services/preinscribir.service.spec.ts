import { TestBed } from '@angular/core/testing';

import { PreinscribirService } from './preinscribir.service';

describe('PreinscribirService', () => {
  let service: PreinscribirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreinscribirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
