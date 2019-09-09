export default class Swiper {


    constructor(wrapper){
        
        // Swiper elements
        this.items = wrapper.getElementsByClassName('items')[0]
        this.prev = wrapper.getElementsByClassName('prev')[0]
        this.next = wrapper.getElementsByClassName('next')[0]

        // Swiper properties
        this.posX1 = 0,
        this.posX2 = 0,
        this.posInitial,
        this.posFinal,
        this.threshold = 100,
        this.slides = this.items.getElementsByClassName('slide'),
        this.slidesLength = this.slides.length,
        this.slideSize = this.items.getElementsByClassName('slide')[0].offsetWidth,
        this.firstSlide = this.slides[0],
        this.lastSlide = this.slides[this.slidesLength - 1],
        this.cloneFirst = this.firstSlide.cloneNode(true),
        this.cloneLast = this.lastSlide.cloneNode(true),
        this.index = 0,
        this.allowShift = true;
    
        // Clone first and last slide
        this.items.appendChild(this.cloneFirst);
        this.items.insertBefore(this.cloneLast, this.firstSlide);
        wrapper.classList.add('loaded');

        // Mouse and Touch events
        this.items.onmousedown = (e) => this.dragStart.call(this, e);
        
        // Touch events
        this.items.addEventListener('touchstart', (e) => this.dragStart.call(this, e));
        this.items.addEventListener('touchend', (e) =>  this.dragEnd.call(this, e));
        this.items.addEventListener('touchmove', (e) => this.dragAction.call(this, e));
        
        // Click events
        this.prev.addEventListener('click', (e) => this.shiftSlide.call(this, -1));
        this.next.addEventListener('click',  (e) => this.shiftSlide.call(this, 1));
        
        // Transition events
        this.items.addEventListener('transitionend', (e) => this.checkIndex.call(this));
    }

    dragStart (e) {
        e = e || window.event;
        e.preventDefault();
        this.posInitial = this.items.offsetLeft;
        
        if (e.type == 'touchstart') {
            this.posX1 = e.touches[0].clientX;
        } else {
            this.posX1 = e.clientX;
            document.onmouseup = (e) => this.dragEnd.call(this, e);
            document.onmousemove = (e) => this.dragAction.call(this, e);
        }
    }

    dragAction (e) {
        e = e || window.event;
        
        if (e.type == 'touchmove') {
            this.posX2 = this.posX1 - e.touches[0].clientX;
            this.posX1 = e.touches[0].clientX;
        } else {
            this.posX2 = this.posX1 - e.clientX;
            this.posX1 = e.clientX;
        }
        this.items.style.left = (this.items.offsetLeft - this.posX2) + "px";
    }
    
    dragEnd (e) {
        this.posFinal = this.items.offsetLeft;

        if (this.posFinal - this.posInitial < -this.threshold) {
            this.shiftSlide.call(this, 1, 'drag');
        } else if (this.posFinal - this.posInitial > this.threshold) {
            this.shiftSlide.call(this, -1, 'drag');
        } else {
            this.items.style.left = (this.posInitial) + "px";
        }

        document.onmouseup = null;
        document.onmousemove = null;
    }
    
    shiftSlide(dir, action) {
        this.items.classList.add('shifting');
        
        if (this.allowShift) {
        if (!action) { this.posInitial = this.items.offsetLeft; }

        if (dir == 1) {
            this.items.style.left = (this.posInitial - this.slideSize) + "px";
            this.index++;      
        } else if (dir == -1) {
            this.items.style.left = (this.posInitial + this.slideSize) + "px";
            this.index--;      
        }
        };
        
        this.allowShift = false;
    }
        
    checkIndex (){
        this.items.classList.remove('shifting');

        if (this.index == -1) {
        this.items.style.left = -(this.slidesLength * this.slideSize) + "px";
        this.index = this.slidesLength - 1;
        }

        if (this.index == this.slidesLength) {
        this.items.style.left = -(1 * this.slideSize) + "px";
        this.index = 0;
        }
        
        this.allowShift = true;
    }
}