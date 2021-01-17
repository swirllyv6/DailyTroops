import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-service-payment',
  templateUrl: './service-payment.component.html',
  styleUrls: ['./service-payment.component.css']
})
export class ServicePaymentComponent implements OnInit {
  paymentStatus:boolean = true;
  isLoading:boolean = true;
  constructor(public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(() => {
      setTimeout(() => {
        this.isLoading = false
      }, 3000);
    });
  }

}
