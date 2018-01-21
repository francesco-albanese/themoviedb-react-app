import React, { Component } from 'react'
import { connect } from 'react-redux';
import GlobalSpinner from '../../components/GlobalSpinner/GlobalSpinner'
import * as actionCreators from '../../store/actions/actionCreators'
import './MoviesList.css'

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

        return (
            <div>
                {content}
            </div>
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