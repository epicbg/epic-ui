import components from './../components/all'
import utilities from './../utilities/all'

export default class Components {
    constructor(){
        this.sections = [
        {
            elements: components,
            search: i => document.getElementsByClassName(i)
        },
        {
            elements: utilities,
            search: i => document.querySelectorAll(`[${i}]`)
        }]
        this.run()
    }

    run(){
        for (const section of this.sections) {   
            for (const component in section.elements) {
                
                // Find html elements
                var results = section.search(component)

                // Map results to component's class
                results = [...results].forEach(result => {
                    section.elements[component].call(this, result)
                })
            }
        }
    }
}