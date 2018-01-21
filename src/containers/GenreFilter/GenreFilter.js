import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators'

class GenreFilter extends Component {

    componentDidMount() {

    }

    render() {
        return <div></div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        genres: state.allGenresReducer.genres
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFetchAllGenres: () => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenreFilter)