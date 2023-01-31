import { TestBed } from '@angular/core/testing';

import { AlarmeServiceService } from './alarme-service.service';

describe('AlarmeServiceService', () => {
  let service: AlarmeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlarmeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
