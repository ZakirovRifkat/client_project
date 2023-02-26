import { TestBed } from '@angular/core/testing';

import { DutyTableService } from './duty-table.service';

describe('DutyTableService', () => {
  let service: DutyTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DutyTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
