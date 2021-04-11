import { TestBed } from '@angular/core/testing';

import { JsonPlaceholderPhotosService } from './json-placeholder-photos.service';

describe('JsonPlaceholderPhotosService', () => {
  let service: JsonPlaceholderPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonPlaceholderPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
