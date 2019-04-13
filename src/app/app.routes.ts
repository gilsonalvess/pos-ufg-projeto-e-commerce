import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CartComponent} from './produto-detail/cart/cart.component';
import {ProdutoComponent} from './catalago-produtos/produto/produto.component';
import {CatalagoProdutosComponent} from './catalago-produtos/catalago-produtos.component';
import {ProdutoDetailComponent} from './produto-detail/produto-detail.component';
import {OrderComponent} from './order/order.component';


export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'order', component: OrderComponent},
  {path: 'catalago-produtos', component: CatalagoProdutosComponent},
  {path: 'produto-detail/:id', component: ProdutoDetailComponent},
  {path: 'produto', component: ProdutoComponent}
]
