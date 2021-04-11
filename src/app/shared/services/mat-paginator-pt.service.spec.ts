import { TestBed } from '@angular/core/testing';

import { MatPaginatorPtService } from './mat-paginator-pt.service';

describe('MatPaginatorPtService', () => {
  let service: MatPaginatorPtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorPtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
