import React from 'react'
import '../styles/showcase.css'
import joints from '../assets/images/joints.png'
import wings from '../assets/images/wings.png'
import tandoori from '../assets/images/tandoori.png'

const ShowCase = () => {
    return (
        <div className='showcase'>
            <div className='images'>
                <img src={wings} className='image img-11' />
                <img src={joints} className='image img-33' />
                <img src={tandoori} className='image img-22' />
            </div>
            <div className="order-now">
                <button className='btn'>Order Now</button>
            </div>
        </div>
    )
}

export default ShowCase
