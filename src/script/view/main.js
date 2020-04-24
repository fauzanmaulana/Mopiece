import '../components/nav-bar'
import Datafilms from '../data/films.js'

const main = () => {
    const searchInput = document.querySelector('#search-input')
    const searchFilm = () => {
        console.log('bismilah')
    }
    searchInput.keyupEvent = searchFilm
}

export default main;