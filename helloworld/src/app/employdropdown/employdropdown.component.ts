import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

@Component({
  selector: 'app-employdropdown',
  templateUrl: './employdropdown.component.html',
  styleUrls: ['./employdropdown.component.css']
})
export class EmploydropdownComponent implements OnInit {
  employ : string;
  employs = [
    new Employ(1,"yashwanth","angular","programmer",99422),
    new Employ(2,"arka mitra","angular","programmer",80422),
    new Employ(3,"naveen","dotnet","export",99422),
    new Employ(4,"govardhan","dotnet","programmer",99422),
    new Employ(5,"prasad","html","developer",87422),
    new Employ(6,"bhargav","html","programmer",69422),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
