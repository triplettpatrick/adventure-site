import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import image9 from './images/img-9.jpg'
import image2 from './images/img-2.jpg'

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these EPIC destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src={image9} 
                    text="Explore the hidden water all deep inside the Amazon jungle" 
                    label="Adventure" 
                    path='/services'/>
                    <CardItem 
                    src={image2} 
                    text="Explore the hidden water all deep inside the Amazon jungle" 
                    label="Adventure" 
                    path='/services'/>
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src={image9} 
                    text="Explore the hidden water all deep inside the Amazon jungle" 
                    label="Adventure" 
                    path='/services'/>
                    <CardItem 
                    src={image2} 
                    text="Explore the hidden water all deep inside the Amazon jungle" 
                    label="Adventure" 
                    path='/services'/>
                    <CardItem 
                    src={image2} 
                    text="Explore the hidden water all deep inside the Amazon jungle" 
                    label="Adventure" 
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;