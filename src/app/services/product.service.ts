import { Product } from 'src/app/models/product';
import * as _ from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _data: any;
  private _dataOriginal: any;

  private _productsSelected: Product;

  get categories() {
    return _.get(this._data, 'categories');
  }

  get productsSelected(): Product {
    return this._productsSelected;
  }
  set productsSelected(value: Product) {
    this._productsSelected = value;
  }


  constructor(private http: HttpClient) { }

  public getData() {
    return new Promise((resolve, reject) => {
      this.http.get('assets/data/products.json').subscribe(data => {
        this._data = _.cloneDeep(data);
        this._dataOriginal = _.cloneDeep(data);
        console.log(this._data);

        resolve(true);
      }, error => {
        console.error('Error al recuperar los productos' + error);
        reject(true);
      })
    })
  }
}
