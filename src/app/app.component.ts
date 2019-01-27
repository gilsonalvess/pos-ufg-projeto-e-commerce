import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'dwm-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  content = 'Bem-vindo a BookCode!'

  constructor() { }

  ngOnInit() {
  }
}
