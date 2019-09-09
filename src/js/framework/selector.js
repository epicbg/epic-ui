class Selector {
    findDirectives(directive){
        return document.querySelectorAll(`[${directive}]`)
        // .filter(el => {
        //     return el.parentNode.getAttribute('v-for') !== null || el.parentNode.parentNode.getAttribute('v-for') === null 
        // })
    }
}

export default new Selector