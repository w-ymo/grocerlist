import { TestBed } from '@angular/core/testing';

import { IncluyeService } from './incluye.service';

describe('IncluyeService', () => {
  let service: IncluyeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncluyeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
