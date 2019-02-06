import {Component, OnInit} from '@angular/core';
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
  animations: []
})
export class CatalagoProdutosComponent implements OnInit {

  produtos: Produto[];
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
      .subscribe(produtos => this.produtos = produtos);

    this.catalagoProdutosService.catalagoProdutos()
      .subscribe(produtos => {
        return this.produtos = produtos;
      });
  }

  toggleSearch() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}
