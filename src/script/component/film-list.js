import './film-item.js';

class FilmList extends HTMLElement{

    constructor() {
        super();
    }

    set films(films){
        this._films = films;
        this.render();
    }

    render(){
        this.innerHTML = ""
        this._films.forEach(film => {
            const filmItemElement = document.createElement('list-film');
            filmItemElement.className = "card-deck col mx-auto my-3 bg-info";
            filmItemElement.film = film;
            this.appendChild(filmItemElement);
        })
    }

    renderError(message) {
        console.log(message);
    }
}
customElements.define('list-film', FilmList);