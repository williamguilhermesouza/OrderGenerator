import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { OrderAccumulatorService } from '../services/order-accumulator.service';
import { Order } from '../interfaces/order';
import { NewOrderResponse } from '../interfaces/new-order-response';
import { OrderHistoryComponent } from './order-history/order-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, OrderHistoryComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OrderGenerator';
  isBuyOrder: boolean = true;
  newOrderResponse?: NewOrderResponse;

  orderForm = this.formBuilder.group({
    stockName: ['PETR4', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor(
    private formBuilder : FormBuilder,
    private orderAccumulatorService : OrderAccumulatorService
  ) {}

  onBuyClickHandler() {
    this.isBuyOrder = true;
  }

  onSellClickHandler() {
    this.isBuyOrder = false;
  }

  onSubmit() {
    let newOrder: Order = {
      ativo: <string>this.orderForm.value.stockName,
      lado: this.isBuyOrder? "C" : "V",
      quantidade: Number(this.orderForm.value.quantity),
      preco: Number(this.orderForm.value.price),
    }
    this.orderAccumulatorService.newOrder(newOrder).subscribe( res => {
      this.newOrderResponse = res;
    });
  }
}
