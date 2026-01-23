export function createdProductsCardsHTML(products){
    const productsCardsHTML = [];
    products.forEach(product => {
        productsCardsHTML.push(createdCardHTML(product));
    });
    
    return productsCardsHTML;
}

export function createdCardHTML(product) {
    const article = document.createElement('article');
    article.classList.add('card-product');
    const html = `
        <a class="swap-on-hover" href="#">
            <img class="img-front" src="${product.image.front}" alt="${product.title}">
            <img class="img-back" src="${product.image.back}" alt="${product.title}">
        </a>
        
        <div class="card-body">
            <div>
                    <a href="#">
                    <p class="body-txt-b3 font-medium clr-brown">${product.title}</p>
                </a>
                <svg class="icon bookmark-icon ">
                    <use href="#bookmarkSVG"></use>
                </svg>
            </div>
            <p class="body-txt-b font-regular clr-brown-white">${product.price}</p>
        </div>
    `
    article.innerHTML = html;
    return article;
}

export function renderCatalog(productsCardsHTML, catalogContainer){
    productsCardsHTML.forEach(productCard => {
        catalogContainer.append(productCard);
    });
}