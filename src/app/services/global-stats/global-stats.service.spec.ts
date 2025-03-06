import { TestBed } from '@angular/core/testing';

import { GlobalStatsService } from './global-stats.service';

describe('GlobalStatsService', () => {
  let service: GlobalStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
