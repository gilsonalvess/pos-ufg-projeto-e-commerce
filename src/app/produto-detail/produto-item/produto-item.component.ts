import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProdutoItem} from './produto-item.model';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Observable} from 'rxjs';
import {CatalagoProdutosService} from '../../catalago-produtos/catalago-produtos.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dwm-produto-item',
  templateUrl: './produto-item.component.html',
  animations: [
    trigger('produtoItemAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in')
      ])
    ])
  ]
})
export class ProdutoItemComponent implements OnInit {

  produtoItemState = 'ready';

  @Input() produtoItem: Observable<ProdutoItem[]>;
  @Output() add = new EventEmitter();

  constructor(private catalagoProdutosService: CatalagoProdutosService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.produtoItem = this.catalagoProdutosService
      .produtoById(this.route.parent.snapshot.params['id']);
  }

  emitAddEvent() {
    this.add.emit(this.produtoItem);
  }

}
