import { renderWishlist } from "../components/wishlist/wishlist.js";

export function init() {
    const wishlistContainer = document.querySelector('.js-wishlist-container');
    renderWishlist(wishlistContainer);
}