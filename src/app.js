import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./components/film-display.js";
import "./components/nav-bar.js";
import "./components/list-film.js";
import Datafilms from "./data/films.js"

const searchInput = document.querySelector('nav-bar')
const filmList = document.querySelector('list-film')

const searchFilm = async () => {
    const result = await Datafilms.searchFilm(searchInput.value)
    renderResult(result);
}

const renderResult =  results => {
    let bismillah = filmList.films = results
    // console.log(bismillah)
}

searchInput.keyupEvent = searchFilm