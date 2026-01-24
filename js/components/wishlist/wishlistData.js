let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export function getWishlist() {
    return wishlist;
}

export function wishlistAdd(productId) {
    wishlist.push(productId);
    saveWishlistToLocalStorage();
}

export function wishlistRemove(productId) {
    const index = wishlist.indexOf(productId);
    if (index !== -1) {
        wishlist.splice(index, 1);
    }
    saveWishlistToLocalStorage();
}

function saveWishlistToLocalStorage() {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}