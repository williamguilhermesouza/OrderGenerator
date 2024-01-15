import { Component } from '@angular/core';

import { Order } from '../../interfaces/order';
import { OrderAccumulatorService } from '../../services/order-accumulator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  ordersHistory?: Order[];
  carouselActive?: Order[];
  slicedOrders: Order[][] = [];

  constructor(
    private orderAccumulatorService : OrderAccumulatorService
  ) {}

  ngOnInit(): void {
    this.orderAccumulatorService.getAllOrders().subscribe(res => {
      this.ordersHistory = res;
      this.carouselActive = this.ordersHistory.slice(0,3);
      let counter = 0;
      for (const [index, value] of this.ordersHistory.entries()) {
        if ((this.slicedOrders[counter]) === undefined) {this.slicedOrders[counter] = [];}
        this.slicedOrders[counter].push(value);
        if ((index + 1) % 3 === 0) {counter++;}
      }
    });
  }


}
