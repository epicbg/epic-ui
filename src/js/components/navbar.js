import { TweenLite } from "gsap/all";

export default class Navbar {
    constructor(el){
        this.navbar = el
        this.watchNavigation(el)
    }

    watchNavigation(){
        let toggler = this.navbar.querySelectorAll('[toggler]')[0];
        if(!toggler)
            return
        toggler.addEventListener('click', (e) => function(){
            let links_wrapper = this.navbar.getElementsByClassName('nav-links');
            if(links_wrapper){
                // links_wrapper[0].classList.toggle('toggled')
                if(links_wrapper[0].style.display == 'none'){
                    TweenLite.fromTo (links_wrapper , 0.1, {x:400}, {x: 0,display:'flex'})  
                } else {
                    TweenLite.fromTo (links_wrapper , 0.3, {x: 0},{x: 400,display:'none'})  
                }
            }
        }.apply(this, e))
    }    

}