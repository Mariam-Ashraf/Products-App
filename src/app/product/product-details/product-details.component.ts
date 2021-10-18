import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsDataService } from 'src/app/services/products-data/products-data.service';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { Store } from '@ngrx/store';
import { AddToWishlist } from 'src/app/store/wishlist/wishlist.action';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {

  receicevedData: any;
  itemsCounter: number = 0;
  checkCartBtn: Array<boolean> = [];
  checkStarBtn: boolean = false;
  noneDisplay: boolean = true;

  constructor(private activeRoute: ActivatedRoute, private productData: ProductsDataService, private addToCart: AddToCartService, private store: Store<any>) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(param =>
      this.productData.getProductsDetails(param.id).subscribe(
        (response) => {
          this.receicevedData = response;
        },
        (error) => {
          console.log(error);
        }
      )
    );

    this.addToCart.currentItemsInCart.subscribe(
      (value) => (this.itemsCounter = value)
    );
    this.checkCartBtn = this.addToCart.isClicked;

    // this.activeRoute.params.subscribe(param => this.receicevedData = this.productsList.filter(product => product.id == param.id)[0]);
  }

  ngAfterContentChecked() {
    if (this.receicevedData != undefined) {
      this.store.select('wishlist').subscribe(items => {
        this.checkStarBtn = items.filter((value: { id: any; }) => value.id == this.receicevedData.id).length > 0;
        this.noneDisplay = false;
      });
    }
  }

  addToWishlist() {
    this.checkStarBtn = true;
    this.store.dispatch(new AddToWishlist(this.receicevedData));
  }

  updateCartCounter() {
    this.addToCart.updateItemsCounter(this.itemsCounter + 1);
    this.addToCart.addToCartFun(this.receicevedData);
    alert("Item is added to cart successfully.");
    this.checkCartBtn[this.receicevedData.id - 1] = true;
  }

}