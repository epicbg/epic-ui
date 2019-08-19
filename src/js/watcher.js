import { setDataPropVal } from './helpers'

class Watcher {

    binding(el){
        el.addEventListener('input', (e) => setDataPropVal(e, this))
    }

    method(el){
        let ui_data = el.getAttribute('ui-on').split(':')
        el.addEventListener(ui_data[0], (e) => {
            this.props.methods[ui_data[1]].call(this, e)
            this.renderHTML.call(this)
        })
    }
}

export default new Watcher