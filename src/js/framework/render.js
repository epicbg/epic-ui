class Render {
    
    uiTextDirective(el){
        let attr = el.getAttribute('ui-text')
        el.innerHTML = this.props.data[attr]
    }

    uiBindDirective(el){
        let attr = el.getAttribute('ui-bind')
        el.value = this.props.data[attr]
    }

    uiBindDirective(el){
        let attr = el.getAttribute('ui-bind')
        el.value = this.props.data[attr]
    }

    uiForDirective(el){
        console.log('asd')
        let attr = el.getAttribute('ui-for')
        let prop = this.props.data[attr.split(' ')[2]]
        
        for(let item in prop){
            el.insertAdjacentHTML('beforebegin', el.outerHTML);
        }
    }

    uiIfDirective(el){
        let attr = el.getAttribute('ui-if')
        if(this.props.data[attr]){
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    uiDirective(el){
        let ui_data = el.getAttribute('ui').split(':')
        el.setAttribute(ui_data[0], this.props.data[ui_data[1]])
    }
}


export default new Render