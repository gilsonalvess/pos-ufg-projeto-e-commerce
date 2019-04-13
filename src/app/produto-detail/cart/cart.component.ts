import {Component, OnInit} from '@angular/core';
import {CartService} from './cart-service';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'dwm-cart',
  templateUrl: './cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity: 1})),
      transition('void => ready', animate('300ms 0s ease-in', keyframes([
        style({opacity: 0, transform: 'translateX(-30px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(10px)', offset: 0.8}),
        style({opacity: 1, transform: 'translateX(0px)', offset: 1})
      ]))),
      transition('ready => void', animate('300ms 0s ease-out', keyframes([
        style({opacity: 1, transform: 'translateX(0px)', offset: 0}),
        style({opacity: 0.8, transform: 'translateX(-10px)', offset: 0.2}),
        style({opacity: 0, transform: 'translateX(30px)', offset: 1})
      ])))
    ])
  ]
})
export class CartComponent implements OnInit {

  rowState = 'ready';

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  items(): any[] {
    return this.cartService.items;
  }

  clear() {
    this.cartService.clear();
  }

  removeItem(item: any) {
    this.cartService.removeItem(item);
  }

  addItem(item: any) {
    this.cartService.addItem(item);
  }

  total(): number {
    return this.cartService.total();
  }
}
