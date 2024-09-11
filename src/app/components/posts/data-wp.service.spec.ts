import { TestBed } from '@angular/core/testing';

import { DataWpService } from './data-wp.service';

describe('DataWpService', () => {
  let service: DataWpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataWpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
