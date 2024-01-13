import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderAccumulatorService {
  private apiUrl = 'localhost:4000';

  constructor(private http: HttpClient) { }

  //Observable<Order[]> in return type
  getAllOrders(): string {
    //let order = this.http.get<Order[]>(this.apiUrl);
    let order = "test api inject";
    return order;
  }
}
