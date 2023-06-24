import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsComponent } from './terms/terms.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { GoogledetailsComponent } from './googledetails/googledetails.component';
import { Pixel7Component } from './pixel7/pixel7.component';
import { S23UltraComponent } from './s23-ultra/s23-ultra.component';
import { Motog82Component } from './motog82/motog82.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ComparisonComponent } from './comparison/comparison.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { QueryComponent } from './query/query.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {
    path:'terms',
    component:TermsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'googledetails',
    component:GoogledetailsComponent
  },
  {
    path:'pixel7',
    component:Pixel7Component
  },
  {
    path:'S23Ultra',
    component:S23UltraComponent
  },
  {
    path:'g82',
    component:Motog82Component
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'comparison',
    component:ComparisonComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'notfound',
    component:NotfoundComponent
  },
  {
    path:'query',
    component:QueryComponent
  },
  {
    path:'ticket',
    component:TicketComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
