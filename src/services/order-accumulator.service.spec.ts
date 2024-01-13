import { TestBed } from '@angular/core/testing';

import { OrderAccumulatorService } from './order-accumulator.service';

describe('OrderAccumulatorService', () => {
  let service: OrderAccumulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderAccumulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
