import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/user-data/register/register.component';
RegisterComponent

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (component.registerForm.dirty && component.registerForm.invalid) {

      if (confirm("Do you want to leave this page? \nYou will lost your unsaved data! :("))
        return true
      else
        return false

    } else {
      return true;
    }

  }
}
