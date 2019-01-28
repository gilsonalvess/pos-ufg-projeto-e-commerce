import {Component, OnInit, ViewChild} from '@angular/core';
import {DragScrollComponent, DragScrollModule} from 'ngx-drag-scroll/lib';

@Component({
  selector: 'dwm-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  @ViewChild('nav', {read: DragScrollComponent}) ds: DragScrollComponent;

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
