import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleMapsModule } from '@angular/google-maps';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SlotsComponent } from './pages/slots/slots.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { SelectStationComponent } from './pages/select-station/select-station.component';
import { BookingDetailsComponent } from './pages/booking-details/booking-details.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { BookingConfirmationComponent } from './pages/booking-confirmation/booking-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SlotsComponent,
    CreateAccountComponent,
    SelectStationComponent,
    BookingDetailsComponent,
    PaymentComponent,
    BookingConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
