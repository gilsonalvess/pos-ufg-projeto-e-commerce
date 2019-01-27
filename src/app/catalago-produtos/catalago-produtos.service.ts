import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {BOOKCODE_API} from '../app.api';
import {ErrorHandler} from '../app.error-handler';
import {Produto} from './produto/produto.model';

@Injectable()
export class CatalagoProdutosService {

  constructor(private http: HttpClient) {
  }

  catalagoProdutos(search?: string) {
    return this.http.get(`${BOOKCODE_API}/catalago-produtos`, {params: {q: search}})
      .catch(ErrorHandler.handleError);
  }

  produtoById(id: string) {
    return this.http.get(`${BOOKCODE_API}/catalago-produtos/${id}`)
      .catch(ErrorHandler.handleError);
  }

  //
  // reviewsOfRestaurant(id: string): Observable<any> {
  //   return this.http.get(`${BOOKCODE_API}/catalago-produtos/${id}/reviews`)
  //     .catch(ErrorHandler.handleError);
  // }
  //
  // menuOfRestaurant(id: string): Observable<any> {
  //   return this.http.get(`${BOOKCODE_API}/catalago-produtos/${id}/menu`)
  //     .catch(ErrorHandler.handleError);
  // }
}
