import swiper from './../components/swiper'
import sidenav from './../components/sidebar'
import navbar from './../components/navbar'


// html class: javascript class 
export default {
    "swiper": (el) => new swiper(el),
    "nav-aside": (el) => new sidenav(el),
    "nav": (el) => new navbar(el),
}