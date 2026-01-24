import { wishlistAdd, wishlistRemove, getWishlist } from "../wishlist/wishlistData.js";

export function bookmarkOnClick() {
    const AllBookmarkBtn = document.querySelectorAll('.js-add-wishlist');

    AllBookmarkBtn.forEach((bookmarkBtn) => {
        bookmarkBtn.addEventListener('click', () => {
            const bookmark = bookmarkBtn.querySelector('svg');
            
            const isActive = bookmark.classList.toggle('active');

            if (isActive) {
                wishlistAdd(bookmarkBtn.dataset.productId);
            } else {
                wishlistRemove(bookmarkBtn.dataset.productId);
            }
        });
    });
}

export function initWishlistUI() {
    const wishlist = getWishlist();
    document.querySelectorAll('.js-add-wishlist').forEach(btn => {
        const productId = btn.dataset.productId;
        const svg = btn.querySelector('svg');

        if (wishlist.includes(productId)) {
            svg.classList.add('active');
        }
    });
}



