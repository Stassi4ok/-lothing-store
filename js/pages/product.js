import { Carousel, IndexManager, RenderSlide } from "../components/carousel/carousel.js";
import { createdProductHTML, renderProduct } from "../components/catalog/product-page-render.js";
import { qtyInputRender } from "../components/quantity-input/quantity-input.js";
export function init(productParams){
    const productId = productParams[0];
    const productHTML = createdProductHTML(productId);
    const productContainer = document.querySelector('.js-product-container');
    renderProduct(productContainer,productHTML);

    const slides = document.querySelectorAll('.js-carousel-img');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    const slideManager = new IndexManager(slides.length);
    const renderer = new RenderSlide(slides);

    const carousel = new Carousel({
        slideManager,
        renderer,
        controls: {
            next: nextBtn,
            prev: prevBtn
        },
        autoController: null
    });

    console.log('Carousel initialized');

    const qtyContainer = document.querySelector(".js-quantity-container");
    qtyInputRender(qtyContainer);
}