import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderHistoryDetailsComponent } from './order-history/order-history-details/order-history-details.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceCheckoutComponent } from './services/service-checkout/service-checkout.component';


import { ServiceDetailComponent } from './services/service-detail/service-detail.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServicePaymentComponent } from './services/service-payment/service-payment.component';

import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'servicecheckout/:serviceId/:garageId',component:ServiceCheckoutComponent},
  { path: 'service', component: ServicesComponent,
    children :[
      
      { path: 'service/:service' , component:ServiceListComponent},
    ]
  },
  { path: 'servicedetail/:serviceId/:garageId', component: ServiceDetailComponent },
  { path: 'orderhistory', component: OrderHistoryComponent },
  { path: 'orderdetail', component: OrderHistoryDetailsComponent },
  { path: 'servicepayment', component:ServicePaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path:'**' , redirectTo:'dashboard'}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
