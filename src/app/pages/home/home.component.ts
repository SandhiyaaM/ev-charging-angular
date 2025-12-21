import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
declare let L: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
   constructor(private router: Router) {}

 stations = [
  {
    name: 'EV Charge – City Center',
    location: 'Chennai Central',
    lat: 13.0827,
    lng: 80.2707,
    status: 'Available',
    price: 120
  },
  {
    name: 'Green EV – Mall Road',
    location: 'T Nagar',
    lat: 13.0358,
    lng: 80.2445,
    status: 'Busy',
    price: 140
  },
  {
    name: 'FastCharge – Tech Park',
    location: 'OMR IT Park',
    lat: 13.0674,
    lng: 80.2376,
    status: 'Available',
    price: 110
  }
];
 


  ngAfterViewInit(): void {
    this.loadMap();
  }

  loadMap() {
    const map = L.map('map').setView([13.0827, 80.2707], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(map);

   this.stations.forEach(station => {

  const color =
    station.status === 'Available' ? '#2ecc71' : '#e74c3c';

  const icon = L.divIcon({
    html: `
      <i class="fa fa-charging-station"
         style="color:${color}; font-size:30px;">
      </i>
    `,
    iconSize: [30, 30],
    className: 'ev-marker'
  });

  L.marker([station.lat, station.lng], { icon })
    .addTo(map)
    .bindPopup(`
      <b>${station.name}</b><br>
      ${station.location}<br>
      Status: ${station.status}<br>
      ₹${station.price}/hr
    `);
});

  }
  scrollToMap() {
  const mapSection = document.getElementById('mapSection');
  if (mapSection) {
    mapSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}
 bookStation(stations: any) {
    this.router.navigate(['/slots'], {
       state: { from: 'home', stations},
      queryParams: {
        name: stations.name,
        location: stations.address,
        rating: stations.rating,
        connectors: stations.connectors
      }
    });
  }

}
