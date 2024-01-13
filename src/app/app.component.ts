import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { OrderAccumulatorService } from '../services/order-accumulator.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'OrderGenerator';
  isBuyOrder: boolean = true;

  orderForm = this.formBuilder.group({
    stockName: ['PETR4', Validators.required],
    quantity: ['', Validators.required],
    price: ['', Validators.required],
  });

  constructor(
    private formBuilder : FormBuilder,
    private orderAccumulatorService : OrderAccumulatorService
  ) {}

  ngOnInit(): void {
    let test = this.orderAccumulatorService.getAllOrders();
    console.log(test);
  }

  onBuyClickHandler() {
    this.isBuyOrder = true;
  }

  onSellClickHandler() {
    this.isBuyOrder = false;
  }

  onSubmit() {
    alert(`ativo: ${this.orderForm.value.stockName}, quantidade: ${this.orderForm.value.quantity}, preço: ${this.orderForm.value.price}`);
  }
}
