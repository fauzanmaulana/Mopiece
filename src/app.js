import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.css";
import "./script/component/film-display.js"
import "./script/component/nav-bar.js";
import "./script/component/film-list.js";
import Datafilms from "./script/data/films.js"

const searchInput = document.querySelector('nav-bar')
const filmList = document.querySelector('list-film')

console.log(filmList)

const searchFilm = async () => {
    const result = await Datafilms.searchFilm(searchInput.value)
    renderResult(result);
}

const renderResult =  results => {
    filmList.films = results
}

searchInput.keyupEvent = searchFilm