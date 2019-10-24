// 3rd party dependencies
import alert from 'sweetalert2'

// Helpers
import swiper from './helpers/swiper'

// UI dependencies
import render from './framework/render'
import selector from './framework/selector'
import watcher from './framework/watcher'
import framework from './framework/framework'

// Third party libs
import axios from 'axios'
export default class ui extends framework {
    constructor(props){
        super();

        // Variables and classes
        this.props = props
        this.render = render
        this.selector = selector
        this.watch = watcher

        // Third party libs
        this.request = axios
        this.alert = alert

        // Listeners and renderers
        this.renderHTML()
        this.watchDirectives()
        
        // Call ui constructor
        props.created.call(this);
        
        window.ui = this
    }

    // Convert directives to rendered html
    renderHTML(){
        this.selector.findDirectives('ui-bind').forEach(el => this.render.uiBindDirective.call(this, el))
        this.selector.findDirectives('ui-text').forEach(el => this.render.uiTextDirective.call(this, el))
        this.selector.findDirectives('ui-for').forEach(el => this.render.uiForDirective.call(this, el))
        this.selector.findDirectives('ui-if').forEach(el => this.render.uiIfDirective.call(this, el))
        this.selector.findDirectives('ui').forEach(el => this.render.uiDirective.call(this, el))
    }

    // Watch ui directives for change
    watchDirectives(){

        // Two way binding
        this.selector.findDirectives('ui-bind').forEach(el => this.watch.binding.call(this, el))

        // UI event handler
        this.selector.findDirectives('ui-on').forEach(el => this.watch.method.call(this, el))
    }


    static swiper(el){
        return new swiper(el);
    }
}

window.ui = ui