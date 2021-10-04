import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup = new FormGroup({
    login: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required)
  });


  constructor(
    private router: Router

  ){}


  ngOnInit(): void {
  }


  save(){
    let users:Array<any> = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") : []
    if (users.findIndex(u=> u.username == this.loginForm.value.login && u.password == this.loginForm.value.senha) != -1){
      localStorage.setItem("isLogged", JSON.stringify(true))
      sessionStorage.setItem("user", JSON.stringify(this.loginForm.value))
      this.router.navigateByUrl('/home')
    }
  }


}
