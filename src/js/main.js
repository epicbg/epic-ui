import jquery from 'jquery'
window.jquery = jquery
class ui {
    constructor(props){
        this.props = props
        this.render()
        this.watchData()
    }

    create(props){
        this.props = props
    }

    render(){
        document.querySelectorAll('[ui-bind]').forEach(el => {
            let attr = el.getAttribute('ui-bind')
            el.value = this.props.data[attr]
        })
        document.querySelectorAll('[ui-text]').forEach(el => {
            let attr = el.getAttribute('ui-text')
            el.innerHTML = this.props.data[attr]
        })
        document.querySelectorAll('[ui]').forEach(el => {
            let ui_data = el.getAttribute('ui').split(':')
            el.setAttribute(ui_data[0], this.props.data[ui_data[1]])
        })
    }

    watchData(){
        document.querySelectorAll('[ui-bind]').forEach(el => {
            el.addEventListener('input', (e) => this.setDataPropVal(e, this))
        })
        document.querySelectorAll('[ui-on]').forEach(el => {
            let ui_data = el.getAttribute('ui-on').split(':')
            el.addEventListener(ui_data[0], (e) => {
                this.props.methods[ui_data[1]].call(this, e)
                this.render()
            })
        })
    }

    setDataPropVal(e, context){
        let attr = e.target.getAttribute('ui-bind')
        context.props.data[attr] = e.target.value
        context.render()
    }
}

window.ui = ui
