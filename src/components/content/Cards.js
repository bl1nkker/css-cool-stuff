import React, { Component } from 'react'
import './../../css/cards.css'

export default class Cards extends Component {
    render() {
        return (
            <div className='cards'>
                <div className='cards-container'>
                    <div className='cards-box'>
                        <div className='cards-content'>
                            <h2>DN</h2>
                            <h3>Service One</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <a href='/read'>Read More</a>
                        </div>
                    </div>

                    <div className='cards-box'>
                        <div className='cards-content'>
                            <h2>AD</h2>
                            <h3>Service Two</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <a href='/read'>Read More</a>
                        </div>
                    </div>

                    <div className='cards-box'>
                        <div className='cards-content'>
                            <h2>MD</h2>
                            <h3>Service Three</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <a href='/read'>Read More</a>
                        </div>
                    </div>

                    <div className='cards-box'>
                        <div className='cards-content'>
                            <h2>LT</h2>
                            <h3>Service Four</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <a href='/read'>Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
