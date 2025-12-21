import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  bookingId = 'EVB-' + Math.random().toString(36).substring(2, 10).toUpperCase();
  bookedDate = new Date().toLocaleDateString('en-IN');

  station: any;
  slot: any;
  duration: any;

  totalAmount = 0;
  tax = 0;
  paymentMethod = '';

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
    this.paymentMethod = state['paymentMethod'];
  }

  get subtotal(): number {
    return this.totalAmount - this.tax;
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

 downloadInvoice(): void {
  const invoiceHtml = `
  <html>
    <head>
      <title>Invoice - ${this.bookingId}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          padding: 24px;
          color: #111;
        }
        h2 {
          color: #16a34a;
          margin-bottom: 4px;
        }
        .muted {
          color: #666;
          font-size: 14px;
        }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px;
          margin-top: 16px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 12px;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background: #f0fdf4;
        }
        .total {
          font-weight: bold;
        }
      </style>
    </head>

    <body>
      <h2>EV ChargeGo Invoice</h2>
      <p class="muted">Booking ID: ${this.bookingId}</p>
      <p class="muted">Date: ${this.bookedDate}</p>

      <div class="card">
        <h3>Station Details</h3>
        <p><strong>${this.station.name}</strong></p>
        <p class="muted">${this.station.address}</p>
        <p>Slot: ${this.slot.time}</p>
        <p>Duration: ${this.duration.label}</p>
      </div>

      <div class="card">
        <h3>Price Breakdown</h3>
        <table>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>₹${this.subtotal}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>₹${this.tax}</td>
          </tr>
          <tr class="total">
            <td>Total Paid</td>
            <td>₹${this.totalAmount}</td>
          </tr>
        </table>
      </div>

      <div class="card">
        <h3>Payment</h3>
        <p>Method: ${this.paymentMethod.toUpperCase()}</p>
        <p>Status: <strong>PAID</strong></p>
      </div>

      <p class="muted" style="margin-top:20px;">
        Thank you for choosing EV ChargeGo
      </p>
    </body>
  </html>
  `;

  const blob = new Blob([invoiceHtml], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `ChargeHub_Invoice_${this.bookingId}.html`;
  a.click();

  window.URL.revokeObjectURL(url);
}


  ngOnInit(): void {}
}
