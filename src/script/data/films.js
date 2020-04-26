class Datafilms {
    static searchFilm(keywords){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=aa991eb2e2b8925116aca8becb2aac69&language=en-US&query=${keywords}&page=1&include_adult=false&region=ID`)
        .then(response => {return response.json()})
        .then(responseJson => responseJson.results)
    }

    static trailerFilm(id){
        return fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=aa991eb2e2b8925116aca8becb2aac69&language=en-US`)
        .then(response => {return response.json()})
        .then(responseJson => responseJson.results)
    }

    static detailFilm(id){
        return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=aa991eb2e2b8925116aca8becb2aac69&language=en-US&region=ID&page=1`)
        .then(response => {return response.json()})
        .then(responseJson => responseJson)
    }

    static nowPlaying(){
        return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=aa991eb2e2b8925116aca8becb2aac69&language=en-US&region=ID&page=1`)
        .then(response => {return response.json()})
        .then(responseJson => responseJson.results)
    }

    static choiceFilm(keywords){
        return fetch(`https://api.themoviedb.org/3/movie/${keywords}?api_key=aa991eb2e2b8925116aca8becb2aac69&language=en-US&region=ID&page=1`)
        .then(response => {return response.json()})
        .then(responseJson => responseJson.results)
    }
}

export default Datafilms;