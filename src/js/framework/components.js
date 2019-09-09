import swiper from './../components/swiper'
import sidenav from './../components/sidebar'
import navbar from './../components/navbar'

export default class Components {
    constructor(){
        this.initSwiper()
        this.initSidenav()
        this.initNav()
    }

    initSwiper(){
        var sliders = document.getElementsByClassName('slider')
        
        let a = [...sliders].forEach(slider => {
            new swiper(slider)
        })
    }

    initSidenav(){
        let sidebars = document.getElementsByClassName('nav-aside')
        sidebars = [...sidebars].forEach(sidebar => new sidenav(sidebar))
    }

    initNav(){
        let navs = document.getElementsByClassName('nav')
        navs = [...navs].forEach(nav => new navbar(nav))
    }
}