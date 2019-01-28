import {Component, Input, OnInit} from '@angular/core';
import {Produto} from './produto.model';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'dwm-produto',
  templateUrl: './produto.component.html',
  animations: [
    trigger('produtoAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translate(-30px, -10px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class ProdutoComponent implements OnInit {

  produtoState = 'ready';

  @Input() produto: Produto;

  constructor() {
  }

  ngOnInit() {
  }

}
