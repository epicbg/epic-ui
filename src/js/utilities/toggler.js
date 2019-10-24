export default class Toggler {
    constructor(el){
        this.el = el
        this.listen()
    }


    listen(){
        this.el.addEventListener('click', function(){
            let targets = document.querySelectorAll(this.options.target)

            targets = [...targets].forEach(elem => function(elem, options){
                // causes bugs if original state starts with none 

                if(!elem.getAttribute('original-display-state')){
                    elem.setAttribute('original-display-state', window.getComputedStyle(elem).display)
                }

                let original_state = elem.getAttribute('original-display-state')
                
                // toggle target element
                if(original_state == 'none'){
                    elem.style.display = window.getComputedStyle(elem).display != 'none' ? 'none' : 'block'
                }
                if(original_state != 'none'){
                    console.log(window.getComputedStyle(elem).display, original_state)
                    elem.style.display = window.getComputedStyle(elem).display != 'none' ? 'none' : original_state
                }

                // todo render options
                for (const param of options.params) {
                    // example for method  <a toggles=".cart-1 | method:doSomething"></a>
                    // but there is alternative <a toggles=".cart-1" ui-on="click:doSomething"></a>

                    // if(param.includes('method')){
                    //     window.ui.props.methods[param.split(':')[1]].call()
                    // }
                }

            }.call(this, elem, this.options))
        }.bind(this))
    }

    
    get options(){
        let options = this.el.getAttribute('toggles').split(' | ');
        
        // targe class/id
        let target = options.splice(0, 1)[0]

        // these will be parameters passed to the toggler e.g <button toggles="#nav | reveal | someParam"></button>
        let params = options

        return {
            target, params
        }
    }
}