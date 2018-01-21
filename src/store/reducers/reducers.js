import * as actionTypes from '../actions/actionTypes';
import { combineReducers } from 'redux'  

const movieByQueryDefaultState = {
    movies: [],
    error: null
}

const movieByQueryReducer = (state = movieByQueryDefaultState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_BY_QUERY:
            return {
                ...state,
                movies: action.movies,
                error: null
            }
        case actionTypes.FETCH_BY_QUERY_FAILS:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

const moviesListInitialState = {
    movies: [],
    error: null
}

const moviesListReducer = (state = moviesListInitialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MOVIES:
            return {
                ...state,
                movies: action.movies,
                error: null
            }
        case actionTypes.FETCH_MOVIES_FAILS:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FETCH_BY_GENRE:
            return {
                ...state,
                movies: action.filteredMovies,
                error: null
            }
        default:
            return state
    }
}

const allGenresInitialState = {
    genres: []
}

const mutateGenres = genres => {
    const mutatedGenres = [...genres]
    const allGenresId = {id: "All", name: "All Genres"}
    mutatedGenres.unshift(allGenresId)
    return mutatedGenres
}

const allGenresReducer = (state = allGenresInitialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ALL_GENRES:
            const mutatedGenres = mutateGenres(action.genres)
            return {
                ...state,
                genres: mutatedGenres
            }
        case actionTypes.FETCH_ALL_GENRES_FAILS:
            return {
                ...state,
                genres: action.genres
            }
        default:
            return state
    }
}

const movieDetailsInitialState = {
    movie: {},
    error: null
}

const movieDetailsReducer = (state = movieDetailsInitialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_MOVIE:
            return {
                ...state,
                movie: action.movie,
                error: null
            }
        case actionTypes.FETCH_MOVIE_FAILS:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}


const reducers = combineReducers({
    movieByQueryReducer,
    moviesListReducer,
    allGenresReducer,
    movieDetailsReducer
})

export default reducers 