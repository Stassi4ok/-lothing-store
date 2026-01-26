import { bookmarkOnClick, initWishlistUI} from "../bookmark/bookmark.js";

export function createdProductsCardsHTML(products){
    const productsCardsHTML = [];
    products.forEach(product => {
        productsCardsHTML.push(createdCardHTML(product));
    });
    
    return productsCardsHTML;
}

export function categoryFilter(products, category) {
    return products.filter(product => product.category === category);
}


function createdCardHTML(product) {
    const article = document.createElement('article');
    article.classList.add('card-product');
    const html = `
        <a class="swap-on-hover" href="#product/${product.id}">
            <img class="img-front" src="${product.image.front}" alt="${product.title}">
            <img class="img-back" src="${product.image.back}" alt="${product.title}">
        </a>
        
        <div class="card-body">
            <div>
                    <a href="#product/${product.id}">
                    <p class="body-txt-b3 font-medium clr-brown">${product.title}</p>
                </a>
                <button class="btn bookmarkBtn js-add-wishlist" data-product-id="${product.id}">
                    <svg class="icon bookmark-icon ">
                        <use href="#bookmarkSVG"></use>
                    </svg>
                </button>

            </div>
            <p class="body-txt-b font-regular clr-brown-white">$${product.price}</p>
        </div>
    `
    article.innerHTML = html;
    return article;
}

export function renderCatalog(productsCardsHTML, catalogContainer){
    productsCardsHTML.forEach(productCard => {
        catalogContainer.append(productCard);
    });
    bookmarkOnClick();
    initWishlistUI();
}