export function wishlistReducer(productsInWishlist: Array<any> = [], action: any) {
    productsInWishlist = Object.assign([], productsInWishlist);

    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            if (!productsInWishlist.includes(action.payload))
                productsInWishlist.push(action.payload);
            return productsInWishlist;

        case 'REMOVE_FROM_WISHLIST':
            productsInWishlist = productsInWishlist.filter(product =>
                product.id != action.payload.id);
            return productsInWishlist;

        default:
            return productsInWishlist;
    }
}