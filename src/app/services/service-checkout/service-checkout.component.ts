import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../service/services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDialogComponent } from '../../services/service-dialog/service-dialog.component';
import { Location } from '@angular/common';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ServiceDateTimeComponent } from '../service-date-time/service-date-time.component';
@Component({
  selector: 'app-service-checkout',
  templateUrl: './service-checkout.component.html',
  styleUrls: ['./service-checkout.component.css']
})
export class ServiceCheckoutComponent implements OnInit {
  serviceId:any;
  garageId:any;
  selectedServices:any = []
  panelOpenState = false;
  constructor(private _bottomSheet: MatBottomSheet, public _location: Location, private _service: ServicesService, public activateRoute: ActivatedRoute, public dialog: MatDialog , private router : Router) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDialogComponent, {
      width: '1000px',
      data: {
        garageId: this.garageId
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
     
          this.selectedServices.push(...result);
    }
     
    );
  }

  selectDateTime(): void {
    this._bottomSheet.open(ServiceDateTimeComponent);
  }

  deleteService(index:number){
    this.selectedServices.splice(index , 1);
    if(this.selectedServices.length == 0){
      this.router.navigate(['dashboard']);
    }
      // this._location.back()
  }

  ngOnInit(): void {
    this.serviceId = this.activateRoute.snapshot.paramMap.get('serviceId')
    this.garageId = this.activateRoute.snapshot.paramMap.get('garageId')
    var data = this._service.getServiceByID(this.serviceId, this.garageId)
    this.selectedServices = [data];
  }

}
