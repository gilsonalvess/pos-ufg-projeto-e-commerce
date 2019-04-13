
import {Produto} from '../../catalago-produtos/produto/produto.model';

export class CartItem {
  constructor(public produto: Produto,
              public quantity: number = 1){}

  value(): number {
    return this.produto.preco * this.quantity;
  }
}
