import { TestBed } from '@angular/core/testing';

import { MiniHeaderTopService } from './mini-header-top.service';

describe('MiniHeaderTopService', () => {
  let service: MiniHeaderTopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniHeaderTopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
