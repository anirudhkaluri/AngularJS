import { TestBed } from '@angular/core/testing';

import { JwtRouteGuardService } from './jwt-route-guard.service';

describe('JwtRouteGuardService', () => {
  let service: JwtRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JwtRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
