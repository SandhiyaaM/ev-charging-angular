import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { SelectStationComponent } from './pages/select-station/select-station.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BookingConfirmationComponent } from './pages/booking-confirmation/booking-confirmation.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'slots', component: SlotsComponent },
  { path: 'select-station', component: SelectStationComponent },
  { path: 'booking-details', component: BookingDetailsComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'booking-confirmation', component: BookingConfirmationComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
