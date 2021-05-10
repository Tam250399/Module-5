import { TestBed } from '@angular/core/testing';

import { DateUntilService } from './date-until.service';

describe('DateUntilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateUntilService = TestBed.get(DateUntilService);
    expect(service).toBeTruthy();
  });
});
