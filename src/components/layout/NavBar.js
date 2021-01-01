import React, { Component } from 'react'
import './../../css/navbar.css'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className='nav-logo'>
                    <span>b</span>
                    <span>l</span>
                    <span>1</span>
                    <span>n</span>
                    <span>k</span>
                    <span>-</span>
                </div>
                <div className='nav-buttons'>
                    <Link to='/hearts'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Hearths
                    </Link>

                    <Link to='/cubes'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Cubes
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
