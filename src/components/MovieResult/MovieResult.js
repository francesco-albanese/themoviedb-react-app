import React from 'react'
import { Link } from 'react-router-dom'
import './MovieResult.css'
import * as constants from '../../constants'

const MovieResult = props => {
    console.log(props)
    const src = props.poster_path ? constants.TMDB_IMG_URL + props.poster_path.replace(/\//, '') : "http://via.placeholder.com/50x50"
    return (
        <div className="movie-result-container">
            <Link to={'/movie/' + props.id}>
                <img className="movie-result-img" alt="movie thumbnail" src={src}/>
                <div title={props.title} className="movie-result-title">{props.title}</div>
            </Link>
        </div>
    )
}

export default MovieResult