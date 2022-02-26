import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName : string;
  passCode : string;
  login() {
    if (this.userName=="Narra" && this.passCode=="Narra") {
      this._router.navigate(["/menu"]);
   }
   
   }


  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

}
