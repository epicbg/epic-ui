import components from './../../src/components/index'

class Builder {
    constructor(){
        this.builder_menu = document.getElementById('builder')

        this.attachComponentsToMenu()
    }

    attachComponentsToMenu(){
        for(component of components){
            document.createElement()
        }
    }
}


export default new Builder