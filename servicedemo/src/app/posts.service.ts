import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { posts } from './posts';

@Injectable({
  providedIn: 'root'
})
export class postsservice {
  showUser() : Observable<posts[]> 
  {
     return this._http.get<posts[]>
     ("https://jsonplaceholder.typicode.com/posts");
  }
  
  constructor(private _http : HttpClient) { }
}