import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CatalagoProdutosService} from '../catalago-produtos/catalago-produtos.service';
import {ProdutoItem} from './produto-item/produto-item.model';
import {Observable} from 'rxjs';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'dwm-prodduto-detail',
  templateUrl: './produto-detail.component.html',
  animations: [
    trigger('produtoDetailAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class ProdutoDetailComponent implements OnInit {
  produtoItemState = 'ready';

  @Input() produtoDetail: Observable<ProdutoItem[]>;
  @Output() add = new EventEmitter();

  constructor(private catalagoProdutosService: CatalagoProdutosService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.catalagoProdutosService.produtoById(this.route.snapshot.params['id'])
      .subscribe(prodDetail =>
        this.produtoDetail = prodDetail);
  }

  emitAddEvent() {
    this.add.emit(this.produtoDetail);
  }
}
