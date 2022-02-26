import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {
  userName : string;
  passCode : string;
  login() {
    if (this.userName=="Narra" && this.passCode=="Narra") {
      this._router.navigate(["/customerdashboard"]);
   }
   
   }

  constructor(private _router :Router) { }

  ngOnInit(): void {
  }

}
