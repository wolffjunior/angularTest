import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/dtos';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.sass']
})
export class InfoCardComponent implements OnInit {

  @Input()
  public post: Post | null = null
  
  @Output()
  public clickEvent: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickEvent.emit(this.post)
  }

}
