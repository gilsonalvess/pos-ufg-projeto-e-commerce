import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule, PreloadAllModules} from '@angular/router';

import {ROUTES} from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ProdutoComponent } from './catalago-produtos/produto/produto.component';
import { CatalagoProdutosComponent } from './catalago-produtos/catalago-produtos.component';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    HeaderComponent,
    AboutComponent,
    ProdutoComponent,
    CatalagoProdutosComponent,
    ProdutoDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
