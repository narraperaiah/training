import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';
import { postsservice } from '../posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  
  posts : posts[];
  constructor(private _postsservice : postsservice) {
    this._postsservice.showUser().subscribe(x=>{
      this.posts=x;
    })
   }


  ngOnInit(): void {
  }

}
