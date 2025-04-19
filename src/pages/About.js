import React from 'react'
import bgImg from '../images/about-hero.png'
import { Link } from 'react-router-dom'
export default function About() {
    return (
        <div className='about-page-container'>
            <img src={bgImg} className='about-hero-image'></img>
            <div className='about-page-content'>
                <h1>don't squeeze in a sedan when you could relax in a van</h1>
                <p>our mission is to enliven your road trip with the best vans
                    recertified before each trip to ensure your travel without a hitch. (Hitch costs extra😜)</p>
                <p>our team is full of vanlife enthusiasts whoe knew firts the world on 4 wheels.</p>
            </div>
            <div className='about-page-cta'>
                <h2>your destination is waiting.

                    <br />
                    your van is ready
                </h2>
                <Link className='link-button' to='/vans'>explore your van</Link>
            </div>
        </div>
    )
}
