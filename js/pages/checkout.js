import { renderSummary } from "../components/catalog/summary-render.js";
import { renderCartItem } from "../components/catalog/checkout-page-render.js";
import { cart } from "../components/cart/cart.js";
export function init(){
    const cartContainer = document.querySelector('.cart-items');
    renderCartItem(cart,cartContainer);
    
    const summaryContainer = document.querySelector('.js-payment-summary')
    renderSummary(cart,summaryContainer);
    
}