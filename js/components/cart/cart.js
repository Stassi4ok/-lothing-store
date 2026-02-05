import { products } from "../../../data/products.js";
export let cart = [

];
loadCartFromLocalStor();
export function addCart(productId, productQuantity, productSize) {
    if (productQuantity <= 0) return;
    const item = cart.find(
        cartItem => cartItem.id === productId && cartItem.size === productSize
    );

    if (item) {
        item.quantity += productQuantity;
    } else {
        cart.push({
            id: productId,
            quantity: productQuantity,
            size: productSize
        });
    }
    SaveCartToLocalStor();
}

export function removeFromCart(productId, productSize) {
    cart = cart.filter(
        cartItem => !(cartItem.id === productId && cartItem.size === productSize)
    );
    SaveCartToLocalStor();
}


export function updateQuantity(productId, productSize, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId, productSize);
        return;
    }

    const item = cart.find(
        cartItem => cartItem.id === productId && cartItem.size === productSize
    );

    if (item) {
        item.quantity = newQuantity;
        SaveCartToLocalStor();
    }
}

export function getCartQuantity(cart) {
    let cartQuantity = 0;
    cart.forEach(cartItem => {
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

export function getCartPrice(cart){
    let cartPrice = 0;
    cart.forEach(cartItem => {
        const productId = cartItem.id;
        const matchingProduct = (products.filter(product => product.id === productId))[0];
        cartPrice += matchingProduct.price * cartItem.quantity;
    })
    return cartPrice;
}

export function getCartDiscount(cart){
    let cartDiscount = 0;
    cart.forEach(cartItem => {
        const productId = cartItem.id;
        const matchingProduct = (products.filter(product => product.id === productId))[0];
        cartDiscount += (matchingProduct.oldPrice - matchingProduct.price) * cartItem.quantity;
    })
    return cartDiscount;
}

export function SaveCartToLocalStor() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
    } catch (e) {
        console.error('Failed to save cart to localStorage', e);
    }
}

export function loadCartFromLocalStor() {
    try {
        const raw = localStorage.getItem('cart');
        if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                cart = parsed;
            }
        }
    } catch (e) {
        console.error('Failed to load cart from localStorage', e);
    }
}




export function getCartOldPrice(cart){
    let cartOldPrice = 0;
    cart.forEach(cartItem => {
        const productId = cartItem.id;
        const matchingProduct = (products.filter(product => product.id === productId))[0];
        cartOldPrice += matchingProduct.oldPrice * cartItem.quantity;
    })
    return cartOldPrice;
}

