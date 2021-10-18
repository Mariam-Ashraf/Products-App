import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLoggedIn: any;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.isLoggedIn =
      window.sessionStorage.getItem('user') == null ? false : true;

    if (this.isLoggedIn) {
      return true;
    }

    window.alert("Sorry you don't have permission to view this page :( \nPlease login :)");
    return false;
  }

}
