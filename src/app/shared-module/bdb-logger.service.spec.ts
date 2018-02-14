import { TestBed, inject } from '@angular/core/testing';

import { BdbLoggerService } from './bdb-logger.service';

describe('BdbLoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BdbLoggerService]
    });
  });

  it('should be created', inject([BdbLoggerService], (service: BdbLoggerService) => {
    expect(service).toBeTruthy();
  }));
});
