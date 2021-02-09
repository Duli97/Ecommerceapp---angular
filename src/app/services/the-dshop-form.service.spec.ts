import { TestBed } from '@angular/core/testing';

import { TheDShopFormService } from './the-dshop-form.service';

describe('TheDShopFormService', () => {
  let service: TheDShopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheDShopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
