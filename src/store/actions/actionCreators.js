import * as actionTypes from './actionTypes'
import axios from 'axios'
import * as constants from '../../constants'

export const getQuery = movies => {
    return {
        type: actionTypes.FETCH_BY_QUERY,
        movies
    }
}

export const getQueryFails = error => {
    return {
        type: actionTypes.FETCH_BY_QUERY_FAILS,
        error
    }
}

export const fetchByQuery = query => {
    return dispatch => {
        axios.get(constants.TMDB_FILTER_BY_QUERY_URL + query)
            .then(res => dispatch(getQuery(res.data.results)))
            .catch(error => dispatch(getQueryFails(error)))
    }
}

export const getMovies = movies => {
    return {
        type: actionTypes.FETCH_MOVIES,
        movies
    }
}

export const fetchMoviesFailed = error => {
    return {
        type: actionTypes.FETCH_MOVIES_FAILS,
        error
    }
}

export const fetchMovies = () => {
    return dispatch => {
        axios.get(constants.TMDB_DEFAULT_URL)
            .then(res => dispatch(getMovies(res.data.results)))
            .catch(error => dispatch(fetchMoviesFailed(error)))
    }
}

export const getAllGenres = genres => {
    return {
        type: actionTypes.FETCH_ALL_GENRES,
        genres
    }
}

export const getAllGenresFails = () => {
    return {
        type: actionTypes.FETCH_ALL_GENRES_FAILS,
        genres: []
    }
}

export const fetchAllGenres = () => {
    return dispatch => {
        axios.get(constants.TMDB_GENRES_LIST)
            .then(res => dispatch(getAllGenres(res.data.genres)))
            .catch(error => dispatch(getAllGenresFails()))
    }
}

export const filteredByGenre = filteredMovies => {
    return {
        type: actionTypes.FETCH_BY_GENRE,
        filteredMovies
    }
}

export const fetchByGenre = genreId => {
    if (genreId === "All") {
        return fetchMovies()
    }

    return dispatch => {
        axios.get(constants.TMDB_FILTER_BY_GENRE_URL + genreId)
            .then(res => dispatch(filteredByGenre(res.data.results)))
    }
}

export const getMovie = movie => {
    return {
        type: actionTypes.FETCH_MOVIE,
        movie
    }
}

export const getMovieFails = error => {
    return {
        type: actionTypes.FETCH_MOVIE_FAILS,
        error
    }
}

export const fetchMovie = id => {
    return dispatch => {
        axios.get(constants.TMDB_MOVIE_URL + id + '?api_key=' + constants.API_KEY + '&language=en-US')
            .then(res => dispatch(getMovie(res.data)))
            .catch(error => dispatch(getMovieFails(error)))
    }
}