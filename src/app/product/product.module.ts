import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { EgyCurrencyPipe } from '../pipes/egy-currency/egy-currency.pipe';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent,
    EgyCurrencyPipe,
    CartComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ]
})
export class ProductModule { }
