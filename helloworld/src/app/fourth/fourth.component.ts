import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
topic:string;
trainer:string
  constructor() { 
    this.trainer="prasanna"
    this.topic="angular10"
  }
  

  ngOnInit(): void {
  }

}
