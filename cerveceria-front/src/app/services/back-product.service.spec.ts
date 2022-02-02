import { TestBed } from '@angular/core/testing';

import { BackProductService } from './back-product.service';

describe('BackProductService', () => {
  let service: BackProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
