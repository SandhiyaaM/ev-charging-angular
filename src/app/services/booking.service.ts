import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingData: any = null;

  setBooking(station: any, slot: any, duration: any) {
    this.bookingData = {
      station,
      slot,
      duration
    };
  }

  getBooking() {
    return this.bookingData;
  }

  clearBooking() {
    this.bookingData = null;
  }
  
}
