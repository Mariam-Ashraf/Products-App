import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

  constructor(private http: HttpClient) { }

  getProductsData() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getProductsDetails(productID: number) {
    return this.http.get(`https://fakestoreapi.com/products/${productID}`);
  }

}