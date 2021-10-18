import { Action } from '@ngrx/store';

export class AddToWishlist implements Action {
    readonly type = "ADD_TO_WISHLIST";
    constructor(public payload: object) { }
}

export class RemoveFromWishlist implements Action {
    readonly type = "REMOVE_FROM_WISHLIST";
    constructor(public payload: object) { }
}