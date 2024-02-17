import { TestBed } from '@angular/core/testing';

import { AuthurService } from './authur.service';

describe('AuthurService', () => {
  let service: AuthurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
