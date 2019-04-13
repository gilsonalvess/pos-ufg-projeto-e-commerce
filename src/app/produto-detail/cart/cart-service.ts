import {CartItem} from './cart-item.model';
import {ProdutoItem} from '../produto-item/produto-item.model';
import {Produto} from '../../catalago-produtos/produto/produto.model';


export class CartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: Produto) {

    const foundItem = this.items.find((prodItem) => prodItem.produto.id === item.id);

    if (foundItem) {
      foundItem.quantity = foundItem.quantity + 1;
    } else {
      this.items.push(new CartItem(item));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items.map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
