import React, { Component } from 'react'
import { connect } from 'react-redux';
import GlobalSpinner from '../../components/GlobalSpinner/GlobalSpinner'
import * as actionCreators from '../../store/actions/actionCreators'
import * as constants from '../../constants'
import Auxiliary from '../../components/Auxiliary/Auxiliary'
import './MovieDetails.css'

class Moviedetails extends Component {
    componentDidMount() {
        this.props.onFetchMovie(this.props.match.params.id)
    }

    render() {
        let { movie, error } = this.props
        const isMovieEmpty = Object.keys(movie).length === 0
        let content = null

        if(error) {
            content = (
                <div className="movie-details-error">
                    {error.message}
                </div>
            )
        }

        if (isMovieEmpty) {
            content = (
                <GlobalSpinner />
            )
        } else {
            const year = new Date(movie.release_date).getFullYear() || '-'
            const src = movie.backdrop_path ? constants.TMDB_IMG_URL + movie.backdrop_path.replace(/\//, '') : "http://via.placeholder.com/300x450"
            const renderedGenres = movie.genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
            ))
            const revenueClasses = ['revenue', movie.revenue > 0 ? 'good' : '']

            content = (
                <div className="movie-container">
                    <div className="movie-title"><span>{movie.title + ' ' + year}</span><span>{movie.vote_average}</span></div>
                    <div className="movie-datails-container">
                        <div className="movie-backdrop">
                            <img src={src} alt={movie.title}/>
                        </div>
                        <div className="genres-container">
                            {renderedGenres}
                        </div>
                        <div className="language-container">
                            <span>Original Language: {movie.original_language}</span>
                            <span>Original Title: {movie.original_title}</span>
                        </div>
                        <div className="movie-overview">
                            {movie.overview}
                        </div>
                        <div className="budget-revenue-container">
                            <span className="budget">{movie.budget}</span>
                            <span className={revenueClasses}>{movie.revenue}</span>
                        </div>
                    </div>
                </div>
            )
        }


        return (
            <Auxiliary>
                {content}
            </Auxiliary>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movie: state.movieDetailsReducer.movie,
        error: state.movieDetailsReducer.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchMovie: id => dispatch(actionCreators.fetchMovie(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Moviedetails)