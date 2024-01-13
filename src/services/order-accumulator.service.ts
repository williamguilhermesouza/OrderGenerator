import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../interfaces/order';
import { NewOrderResponse } from '../interfaces/new-order-response';

@Injectable({
  providedIn: 'root'
})
export class OrderAccumulatorService {
  private apiUrl = 'http://localhost:5279/api/Order';

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    let order = this.http.get<Order[]>(this.apiUrl);
    return order;
  }

  newOrder(order: Order): Observable<NewOrderResponse> {
    return this.http.post<NewOrderResponse>(this.apiUrl, order);
  }
}
