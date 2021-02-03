import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/service/services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  isLoading: boolean = true
  serviceData: {id:number, title:string , price:number , description:string , garage:string}[] = [];
  
  constructor( private _services: ServicesService, public activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(routeParams => {
      this.serviceData = this._services.getServices(routeParams.service, {long: '192.168.43.240', lat: '192.168.43.240'})
      setTimeout(() => {
        this.isLoading = false
      }, 1000);
    });
    
  }
}
