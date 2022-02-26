import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Albums } from './albums';

@Injectable({
  providedIn: 'root'
})
export class albumsservice {
  showUser() : Observable<Albums[]> 
  {
     return this._http.get<Albums[]>
     ("https://jsonplaceholder.typicode.com/albums");
  }
  
  constructor(private _http : HttpClient) { }
}