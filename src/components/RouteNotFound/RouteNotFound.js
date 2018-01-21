import React from 'react'
import { Link } from 'react-router-dom'
import './RouteNotFound.css'

const RouteNotFound = props => (
    <div className="not-found-container">
        <p>The page you were looking for doesn't exist.</p>
        <Link to="/">Go back to Home Page</Link>
    </div>
)

export default RouteNotFound