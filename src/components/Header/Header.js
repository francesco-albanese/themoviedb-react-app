import React from 'react'
import logo from '../../assets/tmdb-logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'
import Searchbar from '../../containers/Searchbar/Searchbar'

const Header = props => (
    <header>
        <div className="logo-container">
            <Link to="/">
                <img src={logo} alt="The Movie DB logo" />
            </Link>
        </div>
        <div className="search-container">
            <Searchbar />
        </div>
    </header>
)

export default Header