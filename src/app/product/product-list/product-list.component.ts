import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsDataService } from 'src/app/services/products-data/products-data.service';
import { Store } from '@ngrx/store';
import { RemoveFromWishlist } from 'src/app/store/wishlist/wishlist.action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: any;
  itemsInWishlist: Array<any> = [];

  @ViewChild(ProductCardComponent) productCardComponent: any;

  constructor(private router: Router, private productsData: ProductsDataService, private store: Store<any>) { }

  ngOnInit(): void {
    this.productsData.getProductsData().subscribe(
      (response) => {
        this.productsList = response;
      },
      (error) => {
        console.log(error);
      }
    );

    this.store.select('wishlist').subscribe(items =>
      this.itemsInWishlist = items);
  }

  removeFromWishlist(productItem: any) {
    this.store.dispatch(new RemoveFromWishlist(productItem));
  }

  redirctToRegister() {
    this.router.navigate(['/register']);
  }

  redirctToLogin() {
    this.router.navigate(['/login']);
  }

}
