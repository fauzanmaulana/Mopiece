class Navbar extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set keyupEvent(event){
        this._keyupEvent = event
        this.render()
    }

    get value(){
        return this.querySelector('#search-input').value
    }

    render(){
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="#">Mopiece</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active"><a class="nav-link" href="#">Now Playing</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Popular</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Top Rated</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Upcoming</a></li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" id="search-input" type="search" placeholder="Search" aria-label="Search">
                        <!-- <button class="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button> -->
                        </form>
                    </div>
                </div>
            </nav>
        `

        this.querySelector('#search-input').addEventListener('keyup', this._keyupEvent)
    }
}

customElements.define('nav-bar', Navbar)