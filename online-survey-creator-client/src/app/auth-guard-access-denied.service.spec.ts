import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardAccessDeniedService } from './auth-guard-access-denied.service';

describe('AuthGuardAccessDeniedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardAccessDeniedService]
    });
  });

  it('should be created', inject([AuthGuardAccessDeniedService], (service: AuthGuardAccessDeniedService) => {
    expect(service).toBeTruthy();
  }));
});
