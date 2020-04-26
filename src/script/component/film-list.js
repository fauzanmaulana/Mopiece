import "./film-item.js";

class FilmList extends HTMLElement{
    set films(films){
        this._films = films;
        this.render();
    }

    render(){
        this.innerHTML = "";
        if(this._films != undefined){
            this._films.forEach(film => {
                const filmItemElement = document.createElement("film-item");
                filmItemElement.className = "mt-2 mr-4";
                filmItemElement.film = film;
                this.appendChild(filmItemElement);
            })
        }else{
            console.log("noresult")
        }
    }
}

customElements.define('film-list', FilmList);