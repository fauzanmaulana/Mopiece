class FilmItem extends HTMLElement{

    set film(film){
        this._film = film;
        this.render();
    }

    get filmTitle(){
        const item = this.querySelectorAll('.text-title').innerText
        console.log(item)
    }

    render(){
        this.innerHTML = `
            <style>
                img{width: 130px}
            </style>
                <img src="http://image.tmdb.org/t/p/w185/${this._film.poster_path}" id="${this._film.id}" alt="${this._film.title}">
                <div class="title p-2">
                    <p class="text-white text-center my-0 text-title" id="${this._film.id}">${this._film.title}</p>
                </div>
            </div>
        `
    }
}

customElements.define("film-item", FilmItem);