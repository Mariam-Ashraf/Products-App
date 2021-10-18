import { Component, Input, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { Store } from '@ngrx/store';
import { AddToWishlist } from 'src/app/store/wishlist/wishlist.action';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() productInput: any;

  itemsInCartCounter: number = 0;
  itemsInWishlist: Array<any> = [];
  checkCartBtn: Array<boolean> = [];
  starBtn: boolean = false;

  constructor(private addToCart: AddToCartService, private store: Store<any>) { }

  ngOnInit(): void {
    this.addToCart.currentItemsInCart.subscribe(
      (value) => (this.itemsInCartCounter = value)
    );
    this.checkCartBtn = this.addToCart.isClicked;
    this.store.select('wishlist').subscribe(items =>
      this.itemsInWishlist = items);

    this.starBtn = this.itemsInWishlist.filter(value => value.id == this.productInput.id).length > 0;
  }

  ngDoCheck() {
    this.starBtn = this.itemsInWishlist.filter(value => value.id == this.productInput.id).length > 0;
  }

  addToWishlist(productItem: any) {
    this.store.dispatch(new AddToWishlist(productItem));
  }

  updateCartCounter() {
    this.addToCart.updateItemsCounter(this.itemsInCartCounter + 1);
    this.addToCart.addToCartFun(this.productInput);
    alert("Item is added to cart successfully.");
    this.checkCartBtn[this.productInput.id - 1] = true;
  }

}
