import React, { Component } from 'react'
import './../../css/hearts.css'

export default class Hearts extends Component {

    render() {
        return (
            <div className='hearts-container'>
                <div className='hearts-title'>
                    <p>Hearts</p>
                </div>
                
                <div className='hearts-items'>
                    
                    <div className='hearts-center'>
                        <div className='heart'></div>
                    </div> 

                    <div className='hearts-center'>
                        <div className='heart'></div>
                    </div>

                    <div className='hearts-center'>
                        <div className='heart'></div>
                    </div> 
                </div>
                
                
            </div>
            
            
        )
    }
}
