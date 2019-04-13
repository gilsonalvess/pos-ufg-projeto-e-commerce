import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Produto} from '../../catalago-produtos/produto/produto.model';

import {CatalagoProdutosService} from '../../catalago-produtos/catalago-produtos.service';
import {Observable} from 'rxjs/Observable';
import {ProdutoItem} from '../produto-item/produto-item.model';


@Component({
  selector: 'dwm-produto-cart',
  templateUrl: './produto-cart.component.html'
})
export class ProdutoCartComponent implements OnInit {

  produtoItem: Observable<ProdutoItem[]>;

  constructor(private catalagoProdutosService: CatalagoProdutosService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.produtoItem = this.catalagoProdutosService
      .produtoById(this.route.parent.snapshot.params['id']);
  }

  //  addProdutoItem(item: ProdutoItem) {
  //   console.log(item);
  // }

}
