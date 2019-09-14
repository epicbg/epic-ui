import { TweenLite } from "gsap/all";
import ui from './../main'
export default class Navbar {
    constructor(el){
        this.navbar = el
        this.watchNavigation(el)

        if(el.getAttribute('primary') !== null){
            ui.swiper('body').onLeft(e => this.toggle.call(this)).run()
        }

    }

    watchNavigation(){
        let toggler = this.navbar.querySelectorAll('[toggler]')[0];
        if(!toggler)
            return
        toggler.addEventListener('click', (e) => this.toggle.apply(this, e))
    }

    toggle(){
        let links_wrapper = this.navbar.getElementsByClassName('nav-links');
        if(links_wrapper){
            // links_wrapper[0].classList.toggle('toggled')
            if(links_wrapper[0].style.display == 'none' || !links_wrapper[0].style.display){
                TweenLite.fromTo (links_wrapper , 0.1, {x:400}, {x: 0,display:'flex'})  
            } else {
                TweenLite.fromTo (links_wrapper , 0.1, {x: 0},{x: -400,display:'none'})  
            }
        }
    }

}