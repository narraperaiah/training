import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendorlogin',
  templateUrl: './vendorlogin.component.html',
  styleUrls: ['./vendorlogin.component.css']
})
export class VendorloginComponent implements OnInit {
  userName : string;
  passCode : string;
  login() {
    if (this.userName=="Narra" && this.passCode=="Narra") {
      this._router.navigate(["/vendordashboard"]);
   }
   
   }

  constructor(private _router :Router) { }

  ngOnInit(): void {
  }

}
