import React, { Component } from 'react'
import { connect } from 'react-redux';
import GlobalSpinner from '../../components/GlobalSpinner/GlobalSpinner'
import * as actionCreators from '../../store/actions/actionCreators'
import './MoviesList.css'
import Auxiliary from '../../components/Auxiliary/Auxiliary'
import Movie from '../../components/Movie/Movie'
import GenreFilter from '../GenreFilter/GenreFilter'

class MoviesList extends Component {

    componentDidMount() {
        this.props.onFetchMovies()
    }   

    render() {
        const { moviesList, error } = this.props
        let content = null

        if (error) {
            content = (
                <div className="movies-list-error">
                    {error.message}
                </div>
            )
        }

        if (moviesList.length) {
            content = (
                <Auxiliary>
                    <div className="genrefilter-container">
                        <GenreFilter />
                    </div>
                    <div className="movies-list-container">
                        { moviesList.map(movie => (
                            <Movie key={movie.id} {...movie} />
                        )) }
                    </div>
                </Auxiliary>
            )
        } else {
            content = <GlobalSpinner />
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
        moviesList: state.moviesListReducer.movies,
        error: state.moviesListReducer.error
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchMovies: () => dispatch(actionCreators.fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList)