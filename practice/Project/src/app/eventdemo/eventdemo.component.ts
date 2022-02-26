import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent implements OnInit {

  constructor() { }
  city() {
    alert("City is from Hyderabad...")
  }
  topic() {
    alert("Topic is Angular 10...")
  }

  hello() {
    alert("Welcome to Angular Events...")
  }


  ngOnInit(): void {
  }

}
