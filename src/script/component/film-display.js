class Filmdisplay extends HTMLElement{
    connectedCallback(){
        this.render()
    }

    set filmClick(item){
        this._filmClick = item;
        const genres = this._filmClick.genre;
        const filmgenre = []
        genres.forEach(genre => {
            filmgenre.push(genre.name)
        })
        const genre = filmgenre.join(" | ")
        this._filmGenre = genre
        this.render();
    }

    set detailFilm(item){
        this._detailFilm = item
    }

    render(){
        if(this._filmClick === undefined){
            this.innerHTML = `
            <style>
                .trailer{
                    height: 50vh;
                    width: 55vw;
                    background:url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80');
                    background-size:cover;
                    background-position-y: 50%;
                }
                .info{
                    width:35vw;
                }
            </style>
            <div class="jumbotron jumbotron-fluid mb-0">
                <div class="container">
                    <div class="info">
                        <h1 class="text-white title">Welcome To Mopiece</h1>
                    </div>
                </div>
            </div>

            <div class="trailer"></div>
        `
        }else{
            this.innerHTML = `
                <style>
                    .info{width:35vw}
                    .info img{width : 20px}
                </style>
                <div class="jumbotron jumbotron-fluid mb-0">
                    <div class="container">
                        <div class="info">
                            <h2 class="text-white title">${this._filmClick.title}</h2>
                            <div class="d-flex">
                                <img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMi4wMDIgNTEyLjAwMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMiA1MTIuMDAyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyMzYuOTM4MiIgeTE9IjQ1OC40Mjg0IiB4Mj0iMjM2LjkzODIiIHkyPSItNzEuMTgxNiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjA2NjcgMCAwIC0xLjA2NjcgMy4yNjY2IDU1Ny41MzUyKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkNGOTUiLz4KCTxzdG9wIG9mZnNldD0iMC40MjciIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkM5NTQiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQzIwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzFfKTsiIGQ9Ik0yNzQuODQsMjMuMjEybDY3LjcyMiwxMzcuMjE4bDE1MS40MjksMjIuMDA0YzE3LjIzMiwyLjUwMywyNC4xMTIsMjMuNjgsMTEuNjQ0LDM1LjgzNSAgTDM5Ni4wNTgsMzI1LjA3N2wyNS44NjcsMTUwLjgxN2MyLjk0NCwxNy4xNjItMTUuMDcsMzAuMjUtMzAuNDgyLDIyLjE0N0wyNTYsNDI2LjgzNWwtMTM1LjQ0Miw3MS4yMDYgIGMtMTUuNDEyLDguMTAyLTMzLjQyNi00Ljk4NS0zMC40ODItMjIuMTQ3bDI1Ljg2Ny0xNTAuODE3TDYuMzY3LDIxOC4yNjhjLTEyLjQ2OS0xMi4xNTUtNS41ODgtMzMuMzMsMTEuNjQ0LTM1LjgzNWwxNTEuNDI5LTIyLjAwNCAgbDY3LjcyMS0xMzcuMjE3QzI0NC44NjgsNy41OTcsMjY3LjEzMyw3LjU5NywyNzQuODQsMjMuMjEyeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjM2MS4zMzgiIHkxPSIzOTAuMTMxNCIgeDI9IjIwMS4yMzgiIHkyPSIzOTAuMTMxNCIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjA2NjcgMCAwIC0xLjA2NjcgMy4yNjY2IDU1Ny41MzUyKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkMyMDA7c3RvcC1vcGFjaXR5OjAiLz4KCTxzdG9wIG9mZnNldD0iMC4yMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkJCMDA7c3RvcC1vcGFjaXR5OjAuMjAzIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuNDk5IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZBNzAwO3N0b3Atb3BhY2l0eTowLjQ5OSIvPgoJPHN0b3Agb2Zmc2V0PSIwLjg1MiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGODgwMDtzdG9wLW9wYWNpdHk6MC44NTIiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGNzgwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzJfKTsiIGQ9Ik0zNDIuNTYsMTYwLjQzTDI3NC44NCwyMy4yMTJjLTMuODUzLTcuODA3LTExLjM0Ni0xMS43MTEtMTguODM5LTExLjcxMXYyNTkuNzg5ICBMMzQyLjU2LDE2MC40M3oiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8zXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIzODguNjg3NCIgeTE9IjE0NC44MzgzIiB4Mj0iMzQ2LjI4NzQiIHkyPSIzNTMuNjM4MyIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjA2NjcgMCAwIC0xLjA2NjcgMy4yNjY2IDU1Ny41MzUyKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkMyMDA7c3RvcC1vcGFjaXR5OjAiLz4KCTxzdG9wIG9mZnNldD0iMC4yMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkJCMDA7c3RvcC1vcGFjaXR5OjAuMjAzIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuNDk5IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZBNzAwO3N0b3Atb3BhY2l0eTowLjQ5OSIvPgoJPHN0b3Agb2Zmc2V0PSIwLjg1MiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGODgwMDtzdG9wLW9wYWNpdHk6MC44NTIiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGNzgwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzNfKTsiIGQ9Ik0zOTYuMDU4LDMyNS4wNzdsMTA5LjU3NS0xMDYuODFjNi4xNTEtNS45OTYsNy41ODYtMTQuMTg1LDUuMzk5LTIxLjI0N0wyNTYsMjcxLjI4OSAgTDM5Ni4wNTgsMzI1LjA3N3oiLz4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF80XyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxODMuMDk3NyIgeTE9IjM1LjEwODciIHgyPSIzNDkuMTU3NyIgeTI9IjIwMS4xNjg3IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDY2NyAwIDAgLTEuMDY2NyAzLjI2NjYgNTU3LjUzNTIpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQzIwMDtzdG9wLW9wYWNpdHk6MCIvPgoJPHN0b3Agb2Zmc2V0PSIwLjIwMyIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQkIwMDtzdG9wLW9wYWNpdHk6MC4yMDMiLz4KCTxzdG9wIG9mZnNldD0iMC40OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkE3MDA7c3RvcC1vcGFjaXR5OjAuNDk5Ii8+Cgk8c3RvcCBvZmZzZXQ9IjAuODUyIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY4ODAwO3N0b3Atb3BhY2l0eTowLjg1MiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY3ODAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfNF8pOyIgZD0iTTQxMy42Myw0OTYuMzkzTDI1NiwyNzEuMjg5djE1NS41NDZsMTM1LjQ0Miw3MS4yMDYgIEMzOTkuMTc2LDUwMi4xMDcsNDA3LjU2Myw1MDAuODM1LDQxMy42Myw0OTYuMzkzeiIvPgo8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzVfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjY0LjY3NzciIHkxPSIyNDUuMTA4IiB4Mj0iMTg3LjA3NzciIHkyPSIxNDIuNzA4IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDEuMDY2NyAwIDAgLTEuMDY2NyAzLjI2NjYgNTU3LjUzNTIpIj4KCTxzdG9wIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQzIwMDtzdG9wLW9wYWNpdHk6MCIvPgoJPHN0b3Agb2Zmc2V0PSIwLjIwMyIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQkIwMDtzdG9wLW9wYWNpdHk6MC4yMDMiLz4KCTxzdG9wIG9mZnNldD0iMC40OTkiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkE3MDA7c3RvcC1vcGFjaXR5OjAuNDk5Ii8+Cgk8c3RvcCBvZmZzZXQ9IjAuODUyIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY4ODAwO3N0b3Atb3BhY2l0eTowLjg1MiIvPgoJPHN0b3Agb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojRkY3ODAwIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIHN0eWxlPSJmaWxsOnVybCgjU1ZHSURfNV8pOyIgZD0iTTI1NiwyNzEuMjg5bC0xNDAuMDU4LDUzLjc4OEw5MC4wNzYsNDc1Ljg5NGMtMS40NjcsOC41NSwyLjI3MSwxNi4wODcsOC4yOTQsMjAuNDk5ICBMMjU2LDI3MS4yODl6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfNl8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMTU2LjQzMzQiIHkxPSI0MTQuMDIiIHgyPSIxMDYuODMzNCIgeTI9IjI3My4yMiIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCgxLjA2NjcgMCAwIC0xLjA2NjcgMy4yNjY2IDU1Ny41MzUyKSI+Cgk8c3RvcCBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkMyMDA7c3RvcC1vcGFjaXR5OjAiLz4KCTxzdG9wIG9mZnNldD0iMC4yMDMiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRkJCMDA7c3RvcC1vcGFjaXR5OjAuMjAzIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuNDk5IiBzdHlsZT0ic3RvcC1jb2xvcjojRkZBNzAwO3N0b3Atb3BhY2l0eTowLjQ5OSIvPgoJPHN0b3Agb2Zmc2V0PSIwLjg1MiIgc3R5bGU9InN0b3AtY29sb3I6I0ZGODgwMDtzdG9wLW9wYWNpdHk6MC44NTIiLz4KCTxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGNzgwMCIvPgo8L2xpbmVhckdyYWRpZW50Pgo8cGF0aCBzdHlsZT0iZmlsbDp1cmwoI1NWR0lEXzZfKTsiIGQ9Ik0wLjk2OCwxOTcuMDIxTDI1NiwyNzEuMjg5bC04Ni41Ni0xMTAuODZMMTguMDExLDE4Mi40MzQgIEM5LjI4LDE4My43MDIsMy4yMTQsMTg5Ljc2NywwLjk2OCwxOTcuMDIxTDAuOTY4LDE5Ny4wMjF6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfN18iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzQzLjEzOTkiIHkxPSIzOTkuMzE2NCIgeDI9Ii0yMS4yNjAxIiB5Mj0iMjQ0LjExNjQiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMS4wNjY3IDAgMCAtMS4wNjY3IDMuMjY2NiA1NTcuNTM1MikiPgoJPHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZDMjAwO3N0b3Atb3BhY2l0eTowIi8+Cgk8c3RvcCBvZmZzZXQ9IjAuMjAzIiBzdHlsZT0ic3RvcC1jb2xvcjojRkZCQjAwO3N0b3Atb3BhY2l0eTowLjIwMyIvPgoJPHN0b3Agb2Zmc2V0PSIwLjQ5OSIgc3R5bGU9InN0b3AtY29sb3I6I0ZGQTcwMDtzdG9wLW9wYWNpdHk6MC40OTkiLz4KCTxzdG9wIG9mZnNldD0iMC44NTIiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjg4MDA7c3RvcC1vcGFjaXR5OjAuODUyIi8+Cgk8c3RvcCBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiNGRjc4MDAiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF83Xyk7IiBkPSJNMTE1Ljk0MywzMjUuMDc3TDYuMzY3LDIxOC4yNjhjLTYuMTUxLTUuOTk2LTcuNTg2LTE0LjE4NS01LjM5OS0yMS4yNDdMMjU2LDI3MS4yODkgIEwxMTUuOTQzLDMyNS4wNzd6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" width="20"/>
                                <p class="text-white my-0 ml-2">${this._filmClick.rate}</p>
                            </div>
                            <p class="text-white mt-3 genre">${this._filmGenre}</p>
                        </div>
                    </div>
                </div>

                <div class="trailer">
                    <iframe src="https://www.youtube.com/embed/${this._filmClick.trailer}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media; gyroscope;"allowfullscreen></iframe>
                </div>

                <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Details</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                            <div class="col-md-4">
                                <img src="..." class="card-img" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
            `
        }
    }
}
customElements.define('film-display', Filmdisplay)