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