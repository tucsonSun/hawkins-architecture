import { TestBed } from '@angular/core/testing';

import { MyAppRouterService } from './my-app-router.service';

describe('MyAppRouterService', () => {
  let service: MyAppRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAppRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
