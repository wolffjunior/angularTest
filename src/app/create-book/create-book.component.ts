import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.sass']
})
export class CreateBookComponent implements OnInit {

  public book:Array<string> = []

  public bookForm:FormGroup = new FormGroup({
    livro: new FormControl(null, Validators.required),
    autor: new FormControl(null, Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
    this.book = localStorage.getItem("book") != null ? JSON.parse(localStorage.getItem("book") || "") : []
  }

  onsave(){
    this.book.push(this.bookForm.value)
    localStorage.setItem("book", JSON.stringify(this.book))
    this.bookForm.reset()
  }

}

