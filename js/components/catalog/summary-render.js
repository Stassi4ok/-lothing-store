
import { getCartQuantity, getCartDiscount, getCartPrice, getCartOldPrice } from "../cart/cart.js";
export function renderSummary(cart,container) {
    container.innerHTML = '';
    container.append(createdSummaryHTML(cart));
}

export function createdSummaryHTML(cart){

    let quantityProducts = getCartQuantity(cart);
    let oldPrice =  getCartOldPrice(cart);
    let discount = getCartDiscount(cart);
    let totalPrice = getCartPrice(cart);
    
       
    const div = document.createElement('div');
    div.classList.add('card-product');

    const html = `
            <h6 class="heading-h6 clr-brown">Order Summary</h6>
            <div class="summary-body paragraph-p5 clr-brown-light">
                <div>
                    <p>Quantity</p>
                    <p class="clr-brown">${quantityProducts}</p>
                </div>
                <div>
                    <p>Price</p>
                    <p class="clr-brown">$${oldPrice}</p>
                </div>
                <div>
                    <p>Discount</p>
                    <p class="clr-brown">-$${discount}</p>
                </div>
                <div>
                    <p class="font-bold">Total Price</p>
                    <p class="clr-brown">$${totalPrice}</p>
                </div>
            </div>
            <div class="dividing-line"></div>
            <button class="btn payment-btn">Go to Payment</button>
    `
    div.innerHTML = html;
    return div;
}