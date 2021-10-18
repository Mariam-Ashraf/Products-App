import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  authenticated: any = new BehaviorSubject(false);

  constructor() { }

  public userLogin() {
    this.authenticated.next(true);
  }

  public userLogout() {
    this.authenticated.next(false);
  }
}
