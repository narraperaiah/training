import { Component, OnInit } from '@angular/core';
import { Todos } from '../todos';
import { todosservice } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  
  todos : Todos[];
  constructor(private _todosservice : todosservice) {
    this._todosservice.showUser().subscribe(x=>{
      this.todos=x;
    })
   }


  ngOnInit(): void {
  }

}
