import { TestBed } from '@angular/core/testing';

import { OrderAccumulatorService } from './order-accumulator.service';
import { Order } from '../interfaces/order';
import { NewOrderResponse } from '../interfaces/new-order-response';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('OrderAccumulatorService', () => {
  let service: OrderAccumulatorService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  const validBuyOrder: Order = {
    ativo: "PETR4",
    lado: "C",
    quantidade: 100,
    preco: 1.0,
  };

  const validSellOrder: Order = {
    ativo: "PETR4",
    lado: "V",
    quantidade: 100,
    preco: 1.0,
  };

  const invalidHugeOrder: Order = {
    ativo: "PETR4",
    lado: "C",
    quantidade: 1000000000000,
    preco: 1000000000.0,
  };

  const invalidObj = {};

  const okResponse: NewOrderResponse = {
    sucesso: true,
    exposicao_atual: 100,
    msg_erro: undefined,
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new OrderAccumulatorService(httpClientSpy);
  });

  it('Test valid buy request', (done: DoneFn) => {

    httpClientSpy.post.and.returnValue(of(okResponse));

    service.newOrder(validBuyOrder).subscribe({
      next: (response) => {
        expect(response).withContext('expected response').toEqual(okResponse);
        done();
      },
      error: done.fail,
    });
  });


});
