import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'

import {Produto} from './produto/produto.model';
@Component({
  selector: 'dwm-catalago-produtos',
  templateUrl: './catalago-produtos.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class CatalagoProdutosComponent implements OnInit {

  searchBarState = 'hidden'
  catalogo_produtos: Produto[]
  constructor() { }

  ngOnInit() {
  }
  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}
