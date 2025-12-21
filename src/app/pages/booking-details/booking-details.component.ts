import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  station: any;
  slot: any;
  duration: any;

  constructor(
    private bookingService: BookingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const booking = this.bookingService.getBooking();

    if (!booking) {
      this.router.navigate(['/home']);
      return;
    }

    this.station = booking.station;
    this.slot = booking.slot;
    this.duration = booking.duration;
  }

  get tax(): number {
    return Math.round(this.duration.price * 0.18);
  }

  get totalAmount(): number {
    return this.duration.price + this.tax;
  }

  // proceedToPayment(): void {
  //   // 🔥 price sent to payment page
  //   this.router.navigate(['/payment'], {
  //     state: {
  //       amount: this.totalAmount,
  //       station: this.station,
  //       slot: this.slot
  //     }
  //   });
  // }
  proceedToPayment(): void {
  this.router.navigate(['/payment'], {
    state: {
      station: this.station,
      slot: this.slot,
      duration: this.duration,
      totalAmount: this.totalAmount,
      tax: this.tax
    }
  });
}

}
