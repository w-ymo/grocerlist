import { TestBed } from '@angular/core/testing';

import { TpAlmacenajeService } from './tp-almacenaje.service';

describe('TpAlmacenajeService', () => {
  let service: TpAlmacenajeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TpAlmacenajeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
