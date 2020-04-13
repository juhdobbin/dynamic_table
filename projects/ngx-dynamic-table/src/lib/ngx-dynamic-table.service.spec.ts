import { TestBed } from '@angular/core/testing';

import { NgxDynamicTableService } from './ngx-dynamic-table.service';

describe('NgxDynamicTableService', () => {
  let service: NgxDynamicTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDynamicTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
