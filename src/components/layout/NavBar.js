import React, { Component } from 'react'
import './../../css/navbar.css'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className='nav-logo'>
                    Some Logo
                </div>
                <div className='nav-buttons'>
                    <Link to='/hearts'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Hearths
                    </Link>

                    <Link to='/hearts'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Next Page
                    </Link>

                    <Link to='/hearts'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Next Page
                    </Link>
                </div>
            </nav>
            
        )
    }
}

export default NavBar
