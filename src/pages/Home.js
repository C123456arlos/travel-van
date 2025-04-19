import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/home-hero.png'
export default function Home() {
    return (
        <div className='home-container'>
            <img src={image}></img>
            <h1>you got the travel plans we got the travel van</h1>
            <p>add adventure to your life by joining #vanlife move around
                make your perfect trip</p>
            <Link to='vans'>find your van</Link>
            <h2>hello</h2>
        </div>
    )
}