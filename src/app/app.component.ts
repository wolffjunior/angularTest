import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JSONPlaceholderService } from './services/jsonplaceholder.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angularTeste';

  

  constructor(
    private router:Router,
  ){}

  public loginForm:FormGroup = new FormGroup({
    login: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required)
  });

  save(){
    console.log(this.loginForm.value);
  }

  ngOnInit(): void{
    let isLogged = localStorage.getItem("isLogged") ? JSON.parse(localStorage.getItem("isLogged") || "") : false
    isLogged ? this.router.navigateByUrl("home") : this.router.navigateByUrl("login")
  }

  


}
