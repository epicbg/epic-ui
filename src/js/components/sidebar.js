export default class Sidebar {
    constructor(el){
        this.navbar = el
        this.watchDropdowns()
    }

    watchDropdowns(){
        let dropdowns = this.navbar.getElementsByClassName('link-dropdown')
        dropdowns = [...dropdowns].forEach(dropdown_links => {
            dropdown_links.addEventListener('click', (e) => {
                e.preventDefault();
                e.target.classList.toggle('active')
                let dropdown = e.target.parentNode.getElementsByClassName('dropdown')
                if(dropdown[0]){
                    dropdown[0].style.display == 'block' ? dropdown[0].style.display = 'none' : dropdown[0].style.display = 'block';
                }
            })
        })
    }


    
    

}