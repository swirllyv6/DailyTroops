import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-order-history-list',
  templateUrl: './order-history-list.component.html',
  styleUrls: ['./order-history-list.component.css']
})
export class OrderHistoryListComponent implements OnInit {

  serviceData = [{
    title:"service 1",
    price:400
  },
  {
    title:"service 1",
    price:400
  },
  {
    title:"service 1",
    price:400
  },
  {
    title:"service 1",
    price:400
  },
  {
    title:"service 1",
    price:400
  }]

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
