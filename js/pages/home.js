import { Carousel, IndexManager, IntervalTimer, RenderSlide } from "../components/carousel/carousel.js";

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
console.log('Home page loaded');
