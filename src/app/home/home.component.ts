import { Component, OnInit } from '@angular/core';
import { Post } from '../dtos';
import { JSONPlaceholderService } from '../services/jsonplaceholder.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public user:any

  public users:Array<any> = []

  public book:Array<any> = []

  public posts: Array<Post> = [];
  

  constructor(
    private JSONPlaceholder: JSONPlaceholderService
  ) {
    this.posts = new Array<Post>()
  }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user") || "")
    this.users = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") : []
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") : []
    this.JSONPlaceholder.getData().subscribe(posts => {
      console.log(posts)
      this.posts = posts
    })
  }

  click(post:any){
    console.log(post)
  }

}
