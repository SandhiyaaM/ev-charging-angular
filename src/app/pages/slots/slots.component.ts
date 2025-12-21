import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-slots',
  templateUrl: './slots.component.html',
  styleUrls: ['./slots.component.css']
})
export class SlotsComponent implements OnInit {

  stationName = '';
  stationAddress = '';
  rating = '';
  connectors = '';
  station: any; // <-- add this

  durations = [
    { label: '1 Hour', price: 120 },
    { label: '2 Hours', price: 220 },
    { label: '3 Hours', price: 300 }
  ];

  selectedDuration = this.durations[0];
  selectedSlot: any = null;
  previousPage: string = '';

  slots = [
    { time: '09:00 - 10:00', status: 'available' },
    { time: '10:00 - 11:00', status: 'booked' },
    { time: '11:00 - 12:00', status: 'available' },
    { time: '12:00 - 01:00', status: 'available' }
  ];

  constructor(private route: ActivatedRoute, private router: Router,private bookingService: BookingService) { 
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.previousPage = nav.extras.state['from'];
      this.station = nav.extras.state['station']; // station info if passed
    }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.stationName = params['name'];
      this.stationAddress = params['address'];
      this.rating = params['rating'];
      this.connectors = params['connectors'];
    });
  }

  selectDuration(d: any) {
    this.selectedDuration = d;
  }

  // selectSlot(slot: any) {
  //   this.selectedSlot = slot;
  // }
  selectSlot(slot: any) {
  if (slot.status === 'booked') return;

  // clear previous selection
  this.slots.forEach(s => {
    if (s.status === 'selected') {
      s.status = 'available';
    }
  });

  slot.status = 'selected';
  this.selectedSlot = slot;   // 🔥 THIS WAS MISSING OR NOT FIRING
}


  get tax() {
    return Math.round(this.selectedDuration.price * 0.18);
  }

  get total() {
    return this.selectedDuration.price + this.tax;
  }
confirmBooking() {
  if (!this.selectedSlot || !this.selectedDuration) {
    return;
  }

  // ✅ SAFE station object
  const station = {
    name: this.station?.name || this.stationName,
    address: this.station?.address || this.stationAddress,
    rating: this.station?.rating || this.rating,
    connectors: this.station?.connectors || this.connectors
  };

  this.bookingService.setBooking(
    station,
    this.selectedSlot,
    this.selectedDuration
  );

  this.router.navigate(['/booking-details']);
}



  goBack() {
    if (this.previousPage === 'home') {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/select-station']);
    }
  }
}
