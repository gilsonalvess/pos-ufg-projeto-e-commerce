import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import {Produto} from './produto/produto.model';
import {Observable} from 'rxjs';
import {CatalagoProdutosService} from './catalago-produtos.service';
import 'rxjs-compat/add/operator/debounceTime';
import 'rxjs-compat/add/operator/distinctUntilChanged';
import 'rxjs-compat/add/operator/switchMap';
import 'rxjs-compat/add/observable/from';

@Component({
  selector: 'dwm-catalago-produtos',
  templateUrl: './catalago-produtos.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        'max-height': '0px'
      })),
      state('visible', style({
        opacity: 1,
        'max-height': '70px',
        'margin-top': '20px'
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class CatalagoProdutosComponent implements OnInit {

  catalogo_produtos: Produto[];
  searchBarState = 'hidden';
  searchForm: FormGroup;
  searchControl: FormControl;

  constructor(private catalagoProdutosService: CatalagoProdutosService,
              private fb: FormBuilder) {
  }

  ngOnInit() {

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchTerm =>
        this.catalagoProdutosService
          .catalagoProdutos(searchTerm)
          .catch(error => Observable.from([])))
      .subscribe(produtos => this.catalogo_produtos = produtos);

    this.catalagoProdutosService.catalagoProdutos()
      .subscribe(produtos => this.catalogo_produtos = produtos);
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
