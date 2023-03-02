import { TestBed } from '@angular/core/testing';

import { MicroserviceStateService } from './microservice-state.service';

describe('MicroserviceStateService', () => {
  let service: MicroserviceStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicroserviceStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
