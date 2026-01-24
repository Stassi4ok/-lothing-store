import { Carousel, IndexManager, IntervalTimer, RenderSlide } from "../components/carousel/carousel.js";
import { renderCatalog, createdProductsCardsHTML} from "../components/catalog/catalog.js";
import { bestsellerProducts } from "../../data/products.js";

export function init() {
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

    const timer = new IntervalTimer(2000, () => carousel.next());
    carousel.autoController = timer;
    timer.start();
    console.log('Carousel initialized');

    const catalogContainer = document.querySelector('.js-bestSeller-catalog');
    const productsCards = createdProductsCardsHTML(bestsellerProducts);
    renderCatalog(productsCards, catalogContainer);
    console.log('Catalog initialized');

    console.log('Home page loaded');
}
