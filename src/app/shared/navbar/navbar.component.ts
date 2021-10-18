import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart/add-to-cart.service';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  addProductToCartCounter: any;
  authlog: any;

  constructor(private addToCartService: AddToCartService,
    public authenticationService: AuthServiceService) { }

  ngOnInit(): void {
    this.addProductToCartCounter = this.addToCartService.currentItemsInCart;
    this.authlog = window.sessionStorage;
  }

  logout() {
    this.authenticationService.userLogout();
    window.sessionStorage.removeItem("user");
  }
}
