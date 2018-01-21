import React, { Component } from 'react'
import { connect } from 'react-redux';
import GlobalSpinner from '../../components/GlobalSpinner/GlobalSpinner'
import * as actionCreators from '../../store/actions/actionCreators'

class Moviedetails extends Component {
    componentDidMount() {
        this.props.onFetchMovie(this.props.match.params.id)
    }

    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.movieDetailsReducer)
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