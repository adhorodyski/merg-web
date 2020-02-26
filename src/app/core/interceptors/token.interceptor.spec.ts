import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';

describe('TokenInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const interceptor: TokenInterceptor = TestBed.get(TokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
