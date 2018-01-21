import React from 'react'
import { Link } from 'react-router-dom'
import * as constants from '../../constants'
import './Movie.css'

const Movie = props => {
    const style = {
        'backgroundImage': props.poster_path ? `url(${constants.TMDB_IMG_URL + props.poster_path.replace(/\//, '')})` : `url(${'http://via.placeholder.com/500x300'})`
    }
    return (
        <div className="movie" style={style}>
            <Link to={'/movie/' + props.id}>
                <div className="vote">
                    {props.vote_average}
                </div>
            </Link>
        </div>
    )
}

export default Movie