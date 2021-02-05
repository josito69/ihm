import { TestBed } from '@angular/core/testing';

import { MareasProviderService } from './mareas-provider.service';

describe('MareasProviderService', () => {
  let service: MareasProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MareasProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
