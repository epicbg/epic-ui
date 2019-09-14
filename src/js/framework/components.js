import swiper from './../components/swiper'
import sidenav from './../components/sidebar'
import navbar from './../components/navbar'

export default class Components {
    constructor(){
        this.swiper = this.initSwipers()
        this.side_navs = this.initSidenavs()
        this.navs = this.initNavs()
    }

    initSwipers(){
        var sliders = document.getElementsByClassName('slider')
        
        return [...sliders].forEach(slider => {
            new swiper(slider)
        })
    }

    initSidenavs(){
        let sidebars = document.getElementsByClassName('nav-aside')
        return [...sidebars].forEach(sidebar => new sidenav(sidebar))
    }

    initNavs(){
        let navs = document.getElementsByClassName('nav')
        return [...navs].forEach(nav => new navbar(nav))
    }
}