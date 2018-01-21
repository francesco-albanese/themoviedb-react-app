import React from 'react'
import { Link } from 'react-router-dom'
import * as constants from '../../constants'
import './Movie.css'

const Movie = props => {
    const src = props.poster_path ? constants.TMDB_IMG_URL + props.poster_path.replace(/\//, '') : 'http://via.placeholder.com/500x300'
    return (
        <div className="movie">
            <Link to={'/movie/' + props.id}>
                <img src={src} alt={props.title}/>
                <div className="vote">
                    {props.vote_average}
                </div>
            </Link>
        </div>
    )
}

export default Movie