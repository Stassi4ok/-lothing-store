import { createdProductsCardsHTML } from "../catalog/catalog.js";
import { getWishlist } from "./wishlistData.js";
import { products } from "../../../data/products.js";
import { bookmarkOnClick, initWishlistUI } from "../bookmark/bookmark.js";

export function renderWishlist(wishlistContainer){
    const wishlist = getWishlist();
    const wishProducts = [];
    wishlist.forEach(wishProductId => {
        const product = products.find((product) => {
            return product.id === wishProductId;
        });
        if (product) {
            wishProducts.push(product);
        }
    });

    const productsCardsHTML = createdProductsCardsHTML(wishProducts);

    productsCardsHTML.forEach(productCard => {
        wishlistContainer.append(productCard);
    });

    bookmarkOnClick();
    initWishlistUI();
}
