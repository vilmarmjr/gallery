import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderAlbumsService } from './json-placeholder-albums.service';

describe('JsonPlaceholderAlbumsService', () => {
  let service: JsonPlaceholderAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
