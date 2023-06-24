import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import {ReactiveFormsModule} from '@angular/forms';
import { GoogleComponent } from './google/google.component';
import { CartComponent } from './cart/cart.component';
import { SamsungComponent } from './samsung/samsung.component';
import { MotorolaComponent } from './motorola/motorola.component';
import { GoogledetailsComponent } from './googledetails/googledetails.component';
import { Pixel7Component } from './pixel7/pixel7.component';
import { S23UltraComponent } from './s23-ultra/s23-ultra.component';
import { Motog82Component } from './motog82/motog82.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { DataService } from './data.service';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TicketComponent } from './ticket/ticket.component';
import { QueryComponent } from './query/query.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TermsComponent,
    GoogleComponent,
    CartComponent,
    SamsungComponent,
    MotorolaComponent,
    GoogledetailsComponent,
    Pixel7Component,
    S23UltraComponent,
    Motog82Component,
    AboutComponent,
    ContactComponent,
    ComparisonComponent,
    RegisterComponent,
    NotfoundComponent,
    TicketComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
