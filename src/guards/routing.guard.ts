import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingGuard implements CanActivate {
  constructor(
    private router:Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLogged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged") || "") : false
    if(state.url == "/"){
      isLogged ? this.router.navigateByUrl("home") : this.router.navigateByUrl("login")
    }else if(isLogged &&(state.url == "/login" || state.url == "/register")){
      this.router.navigateByUrl("/home")
    }
      return true;
  }
  
}
