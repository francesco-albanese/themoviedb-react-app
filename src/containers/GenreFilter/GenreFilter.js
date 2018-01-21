import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators'
import Auxiliary from '../../components/Auxiliary/Auxiliary'

class GenreFilter extends Component {

    componentDidMount() {
        this.props.onFetchAllGenres()
    }

    render() {
        const { genres } = this.props
        const disabled = genres.length === 0
        let options = genres.length ? genres.map(genre => {
            return <option key={genre.id} value={genre.id}>{genre.name}</option>
        }) : <option>No genres available</option>
        let genresSelect = (
            <label>
                <span>Filter by genre:</span>
                <select onChange={event => this.props.changed(event.target.value)} disabled={disabled}>
                    {options}
                </select>
            </label>
        )
        


        return (
            <Auxiliary>
                {genresSelect}
            </Auxiliary>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        genres: state.allGenresReducer.genres
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchAllGenres: () => dispatch(actionCreators.fetchAllGenres())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter)