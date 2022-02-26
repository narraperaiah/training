import { Component, OnInit } from '@angular/core';
import { Albums } from '../albums';
import { albumsservice } from '../albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums : Albums[];
  constructor(private _albumsservice : albumsservice) {
    this._albumsservice.showUser().subscribe(x=>{
      this.albums=x;
    })
   }


  ngOnInit(): void {
  }

}
