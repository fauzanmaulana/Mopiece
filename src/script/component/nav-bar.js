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

    get navlink(){
        return this.querySelectorAll('.nav-link')
    }

    render(){
        this.innerHTML = `
            <style>
                nav{background: rgb(34,34,34)}
            </style>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <div class="container">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item"><a class="nav-link active" href="#">Now Playing</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Popular</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Top Rated</a></li>
                            <li class="nav-item"><a class="nav-link" href="#">Upcoming</a></li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" id="search-input" type="search" placeholder="Search" aria-label="Search">
                        </form>
                    </div>
                </div>
            </nav>
        `

        this.querySelector('#search-input').addEventListener('keyup', this._keyupEvent)
    }
}

customElements.define('nav-bar', Navbar)