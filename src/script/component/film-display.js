class Filmdisplay extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set filmClick(e){
        this._filmClick = e
        this.render()
    }

    render(){
        this.innerHTML = `
            <div class="jumbotron jumbotron-fluid mb-0">
                <div class="container">
                    <h4 class="display-4 text-white">Judul film</h4>
                </div>
            </div>

            <div class="trailer">
                <iframe src="https://www.youtube.com/embed/HLnnN6L0qEY?autoplay=0" frameborder="0" allow="autoplay; encrypted-media; gyroscope; picture-in-picture"allowfullscreen></iframe>
            </div>
        `
    }
}
customElements.define('film-display', Filmdisplay)