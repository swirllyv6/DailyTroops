import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';



import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

import { ServicesComponent } from './services/services.component';
import { ServiceHeaderComponent } from './services/service-header/service-header.component';


import { ServiceLoaderComponent } from './services/service-loader/service-loader.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ServiceCardComponent } from './services/service-card/service-card.component';
import { ServiceDialogComponent } from "./services/service-dialog/service-dialog.component";

import { ServiceDetailComponent } from './services/service-detail/service-detail.component';


import { ServiceDailogLoaderComponent } from './services/service-dialog/service-dailog-loader/service-dailog-loader.component';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { BannerComponent } from './dashboard/banner/banner.component';
import { SelectServiceComponent } from './dashboard/select-service/select-service.component';
import { OffersComponent } from './dashboard/offers/offers.component';
import { OurServicesComponent } from './dashboard/our-services/our-services.component';
import { OrderHistoryListComponent } from './order-history/order-history-list/order-history-list.component';
import { OrderHistoryDetailsComponent } from './order-history/order-history-details/order-history-details.component';
import { OrderHistoryLoaderComponent } from './order-history/order-history-loader/order-history-loader.component';
import { ServiceListComponent } from './services/service-list/service-list.component';
import { ServiceDateTimeComponent } from './services/service-date-time/service-date-time.component';
import { ServiceCheckoutComponent } from './services/service-checkout/service-checkout.component';
import { ServicePaymentComponent } from './services/service-payment/service-payment.component';
import { ServiceSuccessComponent } from './services/service-success/service-success.component';
import { ServiceCouponComponent } from './services/service-coupon/service-coupon.component';
import { ServiceDetailLoaderComponent } from './services/service-detail/service-detail-loader/service-detail-loader.component';
import { ServicePaymentLoaderComponent } from './services/service-payment/service-payment-loader/service-payment-loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PopularServicesComponent } from './dashboard/popular-services/popular-services.component';
import { HowWeWorkComponent } from './dashboard/how-we-work/how-we-work.component';
import { WeProvideComponent } from './dashboard/we-provide/we-provide.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    ServiceHeaderComponent,
    ServicesComponent,
    ServiceLoaderComponent,
    ServiceCardComponent,
    ServiceDialogComponent,
    ServiceDetailComponent,
    ServiceDailogLoaderComponent,
    OrderHistoryComponent,
    BannerComponent,
    SelectServiceComponent,
    OffersComponent,
    OurServicesComponent,
    OrderHistoryListComponent,
    OrderHistoryDetailsComponent,
    OrderHistoryLoaderComponent,
    ServiceListComponent,
    ServiceDateTimeComponent,
    ServiceCheckoutComponent,
    ServicePaymentComponent,
    ServiceSuccessComponent,
    ServiceCouponComponent,
    ServiceDetailLoaderComponent,
    ServicePaymentLoaderComponent,
    PopularServicesComponent,
    HowWeWorkComponent,
    WeProvideComponent

  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    
    NgxSkeletonLoaderModule.forRoot()
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
