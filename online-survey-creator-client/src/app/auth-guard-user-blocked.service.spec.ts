import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardUserBlockedService } from './auth-guard-user-blocked.service';

describe('AuthGuardUserBlockedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardUserBlockedService]
    });
  });

  it('should be created', inject([AuthGuardUserBlockedService], (service: AuthGuardUserBlockedService) => {
    expect(service).toBeTruthy();
  }));
});
