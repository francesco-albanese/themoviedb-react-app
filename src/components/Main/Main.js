import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './Main.css'
import RouteNotFound from '../RouteNotFound/RouteNotFound'
import MoviesList from '../../containers/MoviesList/MoviesList';

const Main = props => (
    <main>
        <Switch>
            <Route path="/" exact component={MoviesList}/>
            <Route path="/movie:id" exact />
            <Route path="*" component={RouteNotFound} />
        </Switch>
    </main>
)

export default Main