import { TestBed, inject } from '@angular/core/testing';

import { RpguserService } from './rpguser.service';

describe('RpguserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpguserService]
    });
  });

  it('should be created', inject([RpguserService], (service: RpguserService) => {
    expect(service).toBeTruthy();
  }));
});
