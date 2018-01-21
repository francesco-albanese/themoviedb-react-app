import React from 'react'
import './GlobalSpinner.css'

const GlobalSpinner = props => (
    <div style={{height: props.height, width: props.width}} className="global-spinner">Loading...</div>
)

export default GlobalSpinner