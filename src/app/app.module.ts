import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UserDataModule } from './user-data/user-data.module';
import { ProductModule } from './product/product.module';

import { AppComponent } from './app.component';

import { wishlistReducer } from './store/wishlist/wishlist.reducer';
import { RequestInterceptor } from './interceptors/request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ wishlist: wishlistReducer }),
    SharedModule,
    UserDataModule,
    ProductModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
