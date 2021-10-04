import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  public roles = ["Administrator", "User"]

  public userForm:FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
    role: new FormControl(null, Validators.required)
  })

  public users:Array<any> = []

  constructor() { }

  ngOnInit(): void {
    this.users = localStorage.getItem("users") != null ? JSON.parse(localStorage.getItem("users") || "") : []
  }

  onsave(){
    this.users.push(this.userForm.value)
    localStorage.setItem("users", JSON.stringify(this.users))
    this.userForm.reset()
  }

}
