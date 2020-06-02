import { TestBed } from '@angular/core/testing';

import { DistrictLevelDataService } from './district-level-data.service';

describe('DistrictLevelDataService', () => {
  let service: DistrictLevelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistrictLevelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
