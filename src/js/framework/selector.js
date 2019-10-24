class Selector {
    findDirectives(directive){
        return document.querySelectorAll(`[${directive}]`)
        // .filter(el => {
        //     return el.parentNode.getAttribute('v-for') !== null || el.parentNode.parentNode.getAttribute('v-for') === null 
        // })
    }

    find(selector){
        return document.querySelectorAll(selector)
    }
}

export default new Selector