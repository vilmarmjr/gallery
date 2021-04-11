import { TestBed } from '@angular/core/testing';

import { Base64TokenService } from './base64-token.service';

describe('Base64TokenService', () => {
  let service: Base64TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Base64TokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
