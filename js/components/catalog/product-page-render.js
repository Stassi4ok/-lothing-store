import { bookmarkOnClick, initWishlistUI} from "../bookmark/bookmark.js";
import { products } from "../../../data/products.js";
export function createdProductHTML(productId){
    const matchingProduct = (products.filter(product => product.id === productId))[0];
    
    const div = document.createElement('div');

    const html = `
            <div class="page-product-header">
                <div class="product-photos">
                    <div class="carousel-product">
                        <button class="btn prev-btn btn-left">❮</button>
                        <div class="carousel-track">
                            <img class="js-carousel-img show" src="${matchingProduct.image.front}">
                            <img class="js-carousel-img " src="${matchingProduct.image.back}">
                        </div>
                        <button class="btn next-btn btn-right">❯</button>
                    </div>

                </div>
                <div class="title-product">
                    <h1 class="heading-h4 clr-brown-dark">${matchingProduct.title}</h1>
                    <p class="paragraph-p2 font-bold clr-gray">Prise: $${matchingProduct.price}</p>
                    <div class="size-panel ">
                        <p class="body-txt-b1"> Size:</p>
                        <button class="btn body-txt-b1 js-size-btn">XS</button>
                        <button class="btn body-txt-b1 js-size-btn">S</button>
                        <button class="btn body-txt-b1 js-size-btn active">M</button>
                        <button class="btn body-txt-b1 js-size-btn">L</button>
                        <button class="btn body-txt-b1 js-size-btn">XL</button>
                    </div>

                    <div class="add-to-bag">
                        <div class="js-quantity-container"></div>
                        <button class="btn">Add to Bag</button>
                        <button class="btn bookmarkBtn js-add-wishlist" data-product-id="${matchingProduct.id}">
                            <svg class="icon bookmark-icon ">
                                <use href="#bookmarkSVG"></use>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h4 class="heading-h7 clr-brown-dark">Description:</h4>
                        <p class="body-txt-b3 clr-brown">${matchingProduct.description}</p>
                    </div>
                </div>
            </div>
    `
    div.innerHTML = html;
    return div;
}

function initSizeButton() {
    const sizeButtons = document.querySelectorAll('.js-size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(button => {
                button.classList.remove('active');
            });
            button.classList.add('active');
        });   
    });
}

export function renderProduct(container, productHTML) {
    container.append(productHTML);
    bookmarkOnClick();
    initWishlistUI();
    initSizeButton();
}

