import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {DragScrollModule} from 'ngx-drag-scroll/lib';

import {ROUTES} from './app.routes';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CartComponent} from './produto-detail/cart/cart.component';
import {HeaderComponent} from './header/header.component';
import {AboutComponent} from './about/about.component';
import {ProdutoComponent} from './catalago-produtos/produto/produto.component';
import {CatalagoProdutosComponent} from './catalago-produtos/catalago-produtos.component';
import {TemplateCarrosselComponent} from './template-carrossel/template-carrossel.component';
import {ProdutoItemComponent} from './produto-detail/produto-item/produto-item.component';
import {CatalagoProdutosService} from './catalago-produtos/catalago-produtos.service';
import {ReactiveFormsModule} from '@angular/forms';

import {CartService} from './produto-detail/cart/cart-service';
import {ProdutoCartComponent} from './produto-detail/produto-cart/produto-cart.component';
import {ProdutoDetailComponent} from './produto-detail/produto-detail.component';
import {OrderComponent} from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    HeaderComponent,
    AboutComponent,
    ProdutoComponent,
    ProdutoDetailComponent,
    CatalagoProdutosComponent,
    ProdutoCartComponent,
    TemplateCarrosselComponent,
    ProdutoItemComponent,
    OrderComponent
  ],
  imports: [
    DragScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [
    CatalagoProdutosService, CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
