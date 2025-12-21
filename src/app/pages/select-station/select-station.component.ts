import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-station',
  templateUrl: './select-station.component.html',
  styleUrls: ['./select-station.component.css']
})
export class SelectStationComponent {

  searchText: string = '';

  constructor(private router: Router) {}

  stations = [
  { name: 'GreenCharge EV - Chennai Central', address: 'Anna Salai, Chennai', rating: 4.5, description: 'Fast DC chargers near railway station.', connectors: '3/4' },
  { name: 'PowerGo EV - OMR Tech Park', address: 'OMR IT Corridor', rating: 4.1, description: 'AC chargers for office commuters.', connectors: '5/6' },
  { name: 'VoltHub EV - Velachery', address: 'Velachery Main Road', rating: 4.7, description: 'DC + AC chargers, busy area.', connectors: '1/2' },
  { name: 'ChargePoint EV - T Nagar', address: 'Usman Road, T Nagar', rating: 4.3, description: 'Popular shopping area station.', connectors: '4/4' },
  { name: 'Spark EV - Tambaram', address: 'GST Road, Tambaram', rating: 4.0, description: 'Affordable charging.', connectors: '2/3' },
  { name: 'ElectroFast EV - Guindy', address: 'Industrial Estate, Guindy', rating: 4.6, description: 'High-speed DC charging.', connectors: '6/6' },
  { name: 'EcoCharge EV - Anna Nagar', address: '2nd Avenue, Anna Nagar', rating: 4.2, description: 'Residential charging hub.', connectors: '3/5' },
  { name: 'RapidVolt EV - Perungudi', address: 'RMZ Millenia, Perungudi', rating: 4.4, description: 'IT corridor fast charging.', connectors: '5/7' },
  { name: 'UrbanCharge EV - Adyar', address: 'LB Road, Adyar', rating: 4.1, description: 'Convenient neighborhood chargers.', connectors: '2/4' },
  { name: 'PlugIn EV - Porur', address: 'Mount Poonamallee Road', rating: 3.9, description: 'Budget EV charging.', connectors: '1/3' },

  { name: 'Ampere EV - Mogappair', address: 'Nolambur Main Road', rating: 4.3, description: 'Quick charging access.', connectors: '4/5' },
  { name: 'ChargeGrid EV - Sholinganallur', address: 'OMR Sholinganallur', rating: 4.5, description: '24/7 fast chargers.', connectors: '6/8' },
  { name: 'EV Zone - Thoraipakkam', address: 'OMR Thoraipakkam', rating: 4.2, description: 'Corporate EV hub.', connectors: '4/6' },
  { name: 'NextGen EV - Nungambakkam', address: 'College Road', rating: 4.6, description: 'Premium charging station.', connectors: '3/4' },
  { name: 'FastCharge EV - Egmore', address: 'Pantheon Road', rating: 4.0, description: 'Central city chargers.', connectors: '2/3' },
  { name: 'ChargeNow EV - Koyambedu', address: 'CMBT Bus Stand', rating: 3.8, description: 'High traffic charging.', connectors: '3/5' },
  { name: 'Electra EV - Ashok Nagar', address: '1st Avenue', rating: 4.1, description: 'Residential fast charging.', connectors: '2/4' },
  { name: 'PowerDock EV - Saidapet', address: 'Anna Salai, Saidapet', rating: 4.2, description: 'Reliable DC chargers.', connectors: '4/6' },
  { name: 'VoltWay EV - Alandur', address: 'GST Road', rating: 3.9, description: 'Quick top-up chargers.', connectors: '2/3' },
  { name: 'ChargeLoop EV - Pallavaram', address: 'Pallavaram Main Road', rating: 4.0, description: 'Convenient roadside chargers.', connectors: '3/4' },

  { name: 'SparkPlug EV - Chromepet', address: 'Chromepet GST Road', rating: 4.1, description: 'Fast EV access point.', connectors: '3/5' },
  { name: 'EcoVolt EV - Madipakkam', address: 'Madipakkam Bus Stand', rating: 4.2, description: 'Community EV charging.', connectors: '2/4' },
  { name: 'RapidCharge EV - Besant Nagar', address: 'Beach Road', rating: 4.6, description: 'Premium coastal charging.', connectors: '4/4' },
  { name: 'UrbanVolt EV - Triplicane', address: 'Triplicane High Road', rating: 3.8, description: 'City fast chargers.', connectors: '2/3' },
  { name: 'GridCharge EV - Royapettah', address: 'Royapettah High Road', rating: 4.0, description: 'Reliable EV access.', connectors: '3/5' },
  { name: 'Pulse EV - Mylapore', address: 'Luz Church Road', rating: 4.4, description: 'High demand area.', connectors: '3/4' },
  { name: 'ChargeX EV - Kilpauk', address: 'Poonamallee High Road', rating: 4.1, description: 'Central Chennai charging.', connectors: '2/4' },
  { name: 'EV Hub - Purasawalkam', address: 'Perambur Barracks Road', rating: 3.9, description: 'Quick city charging.', connectors: '2/3' },
  { name: 'ElectroGo EV - Perambur', address: 'Paper Mills Road', rating: 4.0, description: 'Affordable charging.', connectors: '3/5' },

  { name: 'ChargePro EV - Kolathur', address: 'Jawahar Nagar', rating: 4.2, description: 'Neighborhood EV hub.', connectors: '3/4' },
  { name: 'VoltPlus EV - Villivakkam', address: 'Villivakkam High Road', rating: 4.1, description: 'Fast urban charging.', connectors: '2/4' },
  { name: 'AmpCharge EV - Avadi', address: 'Avadi Main Road', rating: 3.8, description: 'Suburban EV station.', connectors: '2/3' },
  { name: 'PowerLine EV - Ambattur', address: 'Industrial Estate', rating: 4.3, description: 'Industrial EV chargers.', connectors: '4/6' },
  { name: 'VoltEdge EV - Red Hills', address: 'Red Hills Road', rating: 3.7, description: 'Budget charging.', connectors: '1/2' },
  { name: 'ChargeHub EV - ECR', address: 'East Coast Road', rating: 4.6, description: 'High-end EV charging.', connectors: '5/6' },
  { name: 'EcoPower EV - Injambakkam', address: 'ECR Injambakkam', rating: 4.2, description: 'Scenic EV charging.', connectors: '3/4' },
  { name: 'FastVolt EV - Navalur', address: 'OMR Navalur', rating: 4.4, description: 'IT hub charging.', connectors: '4/5' },
  { name: 'ChargeSmart EV - Siruseri', address: 'SIPCOT IT Park', rating: 4.5, description: 'Corporate fast chargers.', connectors: '6/8' },

  { name: 'EV Connect - Kelambakkam', address: 'Kelambakkam Junction', rating: 4.0, description: 'Highway EV charging.', connectors: '3/5' },
  { name: 'VoltStream EV - Guduvanchery', address: 'GST Road', rating: 3.9, description: 'Suburban charging.', connectors: '2/3' },
  { name: 'PowerMax EV - Urapakkam', address: 'Urapakkam Main Road', rating: 4.1, description: 'Reliable EV station.', connectors: '3/4' },
  { name: 'ChargeWay EV - Vandalur', address: 'Zoo Road', rating: 4.2, description: 'Family-friendly charging.', connectors: '3/5' },
  { name: 'ElectroLine EV - Medavakkam', address: 'Medavakkam Main Road', rating: 4.0, description: 'Daily commute chargers.', connectors: '2/4' },
  { name: 'GridVolt EV - Tambaram East', address: 'Tambaram East', rating: 4.1, description: 'Fast access chargers.', connectors: '3/4' }
];


  selectStation(station: any) {
    this.router.navigate(['/slots'], {
      queryParams: {
        name: station.name,
        address: station.address,
        rating: station.rating,
        connectors: station.connectors
      }
    });
  }
  get filteredStations() {
  if (!this.searchText) {
    return this.stations;
  }

  const search = this.searchText.toLowerCase();

  return this.stations.filter(station =>
    station.name.toLowerCase().includes(search) ||
    station.rating.toString().includes(search) ||
    station.address.toLowerCase().includes(search)
  );
}
}
