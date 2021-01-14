import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-service-date-time',
  templateUrl: './service-date-time.component.html',
  styleUrls: ['./service-date-time.component.css']
})
export class ServiceDateTimeComponent implements OnInit {
  dateTime = [
    {
      date: 16,
      day: 'Mon',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 17,
      day: 'Tue',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 18,
      day: 'Wed',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 19,
      day: 'Thus',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    },
    {
      date: 20,
      day: 'Fri',
      time: [
        10, 11, 12, 1, 2, 3, 4, 5
      ]
    }
  ];
  constructor(private _bottomSheetRef: MatBottomSheetRef<ServiceDateTimeComponent> ) { }

  ngOnInit(): void {
  }

}
