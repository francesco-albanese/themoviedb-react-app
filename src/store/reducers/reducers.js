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


const reducers = combineReducers({
    movieByQueryReducer
})

export default reducers 