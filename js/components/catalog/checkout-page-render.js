import { products } from "../../../data/products.js";

import { removeFromCart } from "../cart/cart.js";
import { init } from "../../pages/checkout.js";
export function renderCartItem(cart,container) {
    container.innerHTML = '';
    cart.forEach(cartItem => {
        container.append(createdCartHTML(cartItem));
    });
    removeFromCartButton(container, cart);
}

export function createdCartHTML(cartItem){
    const productId = cartItem.id;
    const productSize = cartItem.size;
    
    const matchingProduct = (products.filter(product => product.id === productId))[0];
    
       
    const article = document.createElement('article');
    article.classList.add('card-product');

    const html = `
            <a class="swap-on-hover" href="#product/${matchingProduct.id}">
                <img class="card-image" src="${matchingProduct.image.front}" alt="${matchingProduct.title}">
            </a>
            <div class="card-body">
                <div class="title-card">
                    <h6 class="heading-h6 clr-brown">${matchingProduct.title}</h6>
                    <button class="btn remove-from-cart" data-product-id="${matchingProduct.id}" data-product-size="${productSize}">
                        <svg class="icon icon-trash">
                            <use href="#trashSVG"></use>
                        </svg>
                    </button>
                </div>
                <p class="heading-h6 font-bold">$ ${matchingProduct.price}</p>
                <p class="paragraph-p5 font-bold clr-gray ">$ ${matchingProduct.oldPrice}</p>
                <div class="description-product">
                    <div>
                        <p class="body-txt-b4 clr-brown-light">Size: ${productSize}</p>
                        <p class="body-txt-b4 clr-brown-light">Quantity: ${cartItem.quantity}</p>
                    </div>
                    <div>
                        <p class="body-txt-b4 clr-brown-light">Article: 84536789</p>
                        <p class="body-txt-b4 clr-brown-light">Sale: ${matchingProduct.oldPrice === null? "no" : "yes"}</p>
                    </div>
                </div>
                
            </div>
    `
    article.innerHTML = html;
    return article;
}

function removeFromCartButton(container, cart) {
    const removeFromCartBtns = document.querySelectorAll('.remove-from-cart');
    removeFromCartBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const productId = event.currentTarget.dataset.productId;
            const productSize = event.currentTarget.dataset.productSize;
            removeFromCart(productId, productSize);
            
            
            const updatedCart = cart.filter(item => !(item.id === productId && item.size === productSize));
            container.innerHTML = '';
            renderCartItem(updatedCart, container);
            init();
        });
    });
}