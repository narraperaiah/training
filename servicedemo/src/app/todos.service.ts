import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class todosservice {
  showUser() : Observable<Todos[]> 
  {
     return this._http.get<Todos[]>
     ("https://jsonplaceholder.typicode.com/todos");
  }
  
  constructor(private _http : HttpClient) { }
}