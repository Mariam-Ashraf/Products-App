import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private isLoading = new BehaviorSubject(0);

  constructor() { }

  setIsLoading(newValue: any) {
    this.isLoading.next(newValue);
  }

  getIsLoading() {
    return this.isLoading;
  }
}
