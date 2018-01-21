import React, { Component } from 'react'
import { connect } from 'react-redux';
import './Searchbar.css'
import * as actionCreators from '../../store/actions/actionCreators'
import MovieResult from '../../components/MovieResult/MovieResult'

class Searchbar extends Component {
    query = "";

    handleKeyUp = event => {
        this.query = event.target.value
        this.props.onFetchByQuery(this.query)
    }

    render() {
        const resultsContainerClasses = ['results-container', this.query.length ? 'visible' : '']
        let result = null
        const { movies } = this.props

        if (this.props.error) {
            result = (
                <div className="result-error">
                    Unable to fetch movies
                </div>
            )
        }

        if (movies.length) {
            result = movies.map(movie => {
                return <MovieResult key={movie.id} {...movie} />
            })
        }  
        
        if (this.query.length && !movies.length) {
            result = (
                <div className="no-results">
                    No movies found
                </div>
            )
        }
        
        return (
            <div className="search-movies-container">
                <label>
                    <span>Search for movies by title</span>
                    <input placeholder="Please insert query" onKeyUp={this.handleKeyUp} type="text"/>
                </label>
                <div className={resultsContainerClasses.join(' ')}>
                    <div className="content">
                        {result}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        movies: state.movieByQueryReducer.movies,
        error: state.movieByQueryReducer.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchByQuery: query => dispatch(actionCreators.fetchByQuery(query))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)