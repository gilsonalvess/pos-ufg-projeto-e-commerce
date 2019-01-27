import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProdutoComponent } from './catalago_produtos/produto/produto.component';
import { CatalagoProdutosComponent } from './catalago_produtos/catalago-produtos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    HeaderComponent,
    AboutComponent,
    ProdutoComponent,
    CatalagoProdutosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot((ROUTES)),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
