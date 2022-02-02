import { TestBed } from '@angular/core/testing';

import { ChampagneService } from './champagne.service';

describe('ChampagneService', () => {
  let service: ChampagneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampagneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
