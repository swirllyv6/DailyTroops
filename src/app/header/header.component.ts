import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page: string;

  constructor(private location: Location , private router:Router) { 
    
  }

  ngOnInit(): void {
   
  }

  back() {
    this.location.back(); 
  }

}
