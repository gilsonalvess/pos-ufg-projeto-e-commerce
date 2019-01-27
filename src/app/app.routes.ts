import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CartComponent} from './cart/cart.component';
import {ProdutoComponent} from './catalago_produtos/produto/produto.component';
import {CatalagoProdutosComponent} from './catalago_produtos/catalago-produtos.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'catalago_produtos', component: CatalagoProdutosComponent},
  {path: 'produto', component: ProdutoComponent}
]
