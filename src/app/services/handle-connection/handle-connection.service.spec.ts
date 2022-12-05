import { TestBed } from '@angular/core/testing';

import { HandleConnectionService } from './handle-connection.service';

describe('HandleConnectionService', () => {
  let service: HandleConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
