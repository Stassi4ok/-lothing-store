
export class Carousel {
    constructor({ slideManager, renderer, controls, autoController }) {
        this.slideManager = slideManager;
        this.renderer = renderer;
        this.autoController = autoController;

        controls.next.addEventListener('click', () => this.next());
        controls.prev.addEventListener('click', () => this.prev());

        this.render();
        this.autoController?.start();
    }

    render() {
        this.renderer.render(this.slideManager.getCurrent());
    }

    next() {
        this.slideManager.next();
        this.render();
        this.autoController?.reset();
    }

    prev() {
        this.slideManager.prev();
        this.render();
        this.autoController?.reset();
    }
}
export class RenderSlide{
    constructor(slides, activeClass = 'show') {
        this.slides = slides;
        this.activeClass = activeClass;
    }

    render(currentIndex) {
        this.slides.forEach(slide =>
            slide.classList.remove(this.activeClass)
        );

        if (this.slides[currentIndex]) {
            this.slides[currentIndex].classList.add(this.activeClass);
        }
    }
}

export class IndexManager{
    constructor(indexCount) {
        this.indexCount = indexCount;
        this.currentIndex = 0;
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.indexCount;
        return this.currentIndex;
    }

    prev() {
        this.currentIndex =
            (this.currentIndex - 1 + this.indexCount) % this.indexCount;
        return this.currentIndex;
    }

    goTo(index) {
        if (index >= 0 && index < this.indexCount) {
            this.currentIndex = index;
        }
        return this.currentIndex;
    }

    getCurrent() {
        return this.currentIndex;
    }

}
    
export class IntervalTimer {
    constructor(interval, callback) {
        this.interval = interval;
        this.callback = callback;
        this.timerId = null;
    }

    start() {
        this.stop();
        this.timerId = setInterval(this.callback, this.interval);
    }

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    reset() {
        this.start();
    }
}


