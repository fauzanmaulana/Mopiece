class Itemfilm extends HTMLElement{

    constructor() {
        super();
    }

    set film(film) {
        this._film = film;
        this.render();
    }

    render(){
        this.innerHTML = `
            <img src="http://image.tmdb.org/t/p/w185/${this._film.poster_path}" class="card-img-top" alt="bismillah">
            <div class="p-2">
                <p class="card-text text-white text-center">${this._film.title}</p>
            </div>
        `
    }

}

customElements.define("item-film", Itemfilm);