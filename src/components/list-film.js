import './item-film.js'

class Listfilm extends HTMLElement{

    constructor() {
        super();
    }

    set films(films){
        this._films = films
        this.render()
    }

    render(){
        this.innerHTML = ""
        this._films.forEach(film => {
            const filmItemElment = document.createElement('list-film')
            console.log(filmItemElment.film)
            filmItemElment.className = "bg-danger"
            filmItemElment.film = film
            this.appendChild(filmItemElment)
        })
    }
}
customElements.define('list-film', Listfilm)