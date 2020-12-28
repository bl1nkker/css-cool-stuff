import './../../css/loader.css'
import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div>
                <div className={this.props.classForLoader}></div>
                {/* <div className='loader-circle-2'></div>
                <div className='loader-circle-3'></div>
                <div className='loader-circle-4'></div>
                <div className='loader-circle-5'></div> */}
            </div>
        )
    }
}

