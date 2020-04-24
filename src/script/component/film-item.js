class Itemfilm extends HTMLElement{

    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    set film(film) {
        this._film = film;
        this.render();
    }

    render(){
        this.innerHTML = `
    <div class="card shadow bg-white rounded m-0">
            <img
              src="https://image.tmdb.org/t/p/w500/${this._movie.backdrop_path}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body bg-light">
                <h3 class="card-title my-auto">
                  ${this._movie.original_title}
                </h3>
              <p class="card-text">
                ${this._movie.overview}
              </p>
            </div>
          </div>`;
    }

    renderError(message) {
        console.log(message);
    }
}

customElements.define("item-film", Itemfilm);