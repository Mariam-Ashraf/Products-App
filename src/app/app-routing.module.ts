import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { RegisterComponent } from './user-data/register/register.component';
import { LoginComponent } from './user-data/login/login.component';
import { CartComponent } from './product/cart/cart.component';

import { AuthGuard } from './guards/auth-view-page/auth.guard';
import { DeactivateGuard } from './guards/deactivate-register/deactivate.guard';

const routes: Routes = [
  {
    path: "", component: ProductListComponent
  },
  {
    path: "products", component: ProductListComponent
  },
  {
    path: "product/:id", component: ProductDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register", component: RegisterComponent,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "cart", component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
