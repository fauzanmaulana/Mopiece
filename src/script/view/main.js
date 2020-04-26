import "../component/film-display.js"
import "../component/nav-bar.js";
import "../component/film-list.js";
import Datafilms from "../data/films.js"

const main = () => {
    const searchInput = document.querySelector('nav-bar');
    const filmList = document.querySelector('film-list');
    const filmDisplay = document.querySelector('film-display');
    const nav = document.querySelector('nav-bar');

    const choice = options => {
        options.forEach(option => {
            option.addEventListener('click', e => {
                let act = document.querySelectorAll(".active");
                [].forEach.call(act, function(el) {
                    el.classList.remove("active");
                });
                e.target.classList.add('active')
                document.querySelector('#text-info').innerText = e.target.text
                const keyword = e.target.text.replace(' ', '_').toLowerCase()
                categories(keyword)
            })
        })
    }

    const categories = async keyword => {
        const result = await Datafilms.choiceFilm(keyword);
        renderResult(result);
        filmList.style.display = 'flex';
    }

    const now = async () => {
        const result = await Datafilms.nowPlaying();
        renderResult(result);
    }

    const searchFilm = async () => {
        if(searchInput.value != ''){
            document.querySelector('#text-info').innerText = "Search"
            const result = await Datafilms.searchFilm(searchInput.value);
            renderResult(result);
            filmList.style.display = 'flex';
        }else{
            filmList.style.display = 'none';
        }
    }

    const getTrailer = async id => {
        const resultsTrailers = await Datafilms.trailerFilm(id);
        const resultsTrailer = resultsTrailers.filter(res => res.type !== "Clip")
        const resultsDetails = await Datafilms.detailFilm(id);
        // console.log(resultsDetails)
        if(resultsTrailer.length > 0){
            let result = {title : resultsDetails.title, trailer : resultsTrailer[0].key, rate : resultsDetails.vote_average, genre : resultsDetails.genres}
            resultsTrailer != undefined ? filmDisplay.filmClick = result : filmDisplay.filmClick = "Tidak Ada Result"
        }else{
            let result = {title : resultsDetails.title, rate : resultsDetails.vote_average, genre : resultsDetails.genres}
            resultsTrailer != undefined ? filmDisplay.filmClick = result : filmDisplay.filmClick = "Tidak Ada Result"
        }
    }

    const renderResult =  results => {
        let result = results.filter(res => res.poster_path != null);
        filmList.films = result;
        const filmItem = document.querySelectorAll('film-item');
        detailFilm(filmItem);
        choice(nav.navlink);
    }

    const detailFilm = items => {
        items.forEach(item => {
            item.addEventListener('click', e => {
                if(e.target.alt || e.target.innerText){
                    getTrailer(e.target.id)
                }
            })
        })
    }

    now()
    
    searchInput.keyupEvent = searchFilm;
}

export default main;