import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {BOOKCODE_API} from '../app.api';

@Injectable()
export class CatalagoProdutosService {

  constructor(private http: HttpClient) {
  }

  catalagoProdutos(search?: string): Observable<any> {
    return this.http.get(`${BOOKCODE_API}/produtos`);
  }

  produtoById(id: string): Observable<any> {
    return this.http.get(`${BOOKCODE_API}/produtos/${id}`);
  }

}
