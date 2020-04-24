class Datafilms {
    static searchFilm(keywords){
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=aa991eb2e2b8925116aca8becb2aac69&language=en-US&query=${keywords}&page=1&include_adult=false&region=ID`)
        .then(response => {return response.json()})
        .then(responseJson => responseJson.results)
    }
}

export default Datafilms;