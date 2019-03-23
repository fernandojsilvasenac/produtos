import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProdutosProvider Provider');
  }

}
