import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  selectedMethod: string = 'upi';

  station: any;
  slot: any;
  duration: any;
  totalAmount = 0;
  tax = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras.state;

    if (!state) {
      this.router.navigate(['/home']);
      return;
    }

    this.station = state['station'];
    this.slot = state['slot'];
    this.duration = state['duration'];
    this.totalAmount = state['totalAmount'];
    this.tax = state['tax'];
  }

  get subtotal(): number {
    return this.duration.price;
  }

  selectMethod(method: string): void {
    this.selectedMethod = method;
  }

 payNow(): void {
  this.router.navigate(['/booking-confirmation'], {
    state: {
      station: this.station,
      slot: this.slot,
      duration: this.duration,
      totalAmount: this.totalAmount,
      tax: this.tax,
      paymentMethod: this.selectedMethod
    }
  });
}

}
