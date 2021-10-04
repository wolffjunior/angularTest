import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.sass']
})
export class NavBarComponent implements OnInit {

  public isLogged: boolean = false

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    let isLogged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged") || "") : false
    this.isLogged = isLogged == true
  }

  onLogout(){
    localStorage.removeItem("isLogged")
    sessionStorage.removeItem("user")
    this.router.navigateByUrl('/login')
  }

}
