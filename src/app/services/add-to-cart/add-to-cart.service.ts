import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  private itemsInCartCounter = new BehaviorSubject(0);
  currentItemsInCart = this.itemsInCartCounter.asObservable();

  productsInCart: Array<any> = [];
  quantityNumber: Array<number> = [];
  totalPrice: number = 0;
  isClicked: Array<boolean> = [];


  constructor() { }

  updateItemsCounter(newCounterValue: any) {
    this.itemsInCartCounter.next(newCounterValue);
  }

  addToCartFun(productItem: any) {
    this.productsInCart.push(productItem);
    this.quantityNumber[productItem.id - 1] = 1;
    this.totalPrice += productItem.price;
    this.isClicked[productItem.id - 1] = true;
  }

  removeFromCartFun(productItem: any) {
    this.isClicked[productItem.id - 1] = false;
    this.productsInCart = this.productsInCart.filter(elem => {
      return elem != productItem;
    });
  }

  getProductsInCart() {
    return this.productsInCart;
  }

  getQuantity() {
    return this.quantityNumber;
  }

  setQuantity(itemID: number, newQuantityValue: number, status: string) {
    if (status == "plus") {
      this.totalPrice +=
        this.productsInCart.filter(elem => elem.id == (itemID + 1))[0].price;
    }
    if (status == "minus") {
      this.totalPrice -=
        this.productsInCart.filter(elem => elem.id == (itemID + 1))[0].price;
    }
    if (status == "reset") {
      this.totalPrice -=
        (this.productsInCart.filter(elem => elem.id == (itemID + 1))[0].price
          * this.quantityNumber[itemID]);
    }
    this.quantityNumber[itemID] = newQuantityValue;
  }


}