import React, { useEffect } from 'react'
import image1 from '../../assets/SPIDER-MAN_ ACROSS THE SPIDER-VERSE _ Poster.jpg'
import image2 from '../../assets/Wish-104479170-large.jpg'

function Hero() {
    return (
        <div className='Hero'>
            <div className="text">
                <h1>Movies Unleashed</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium mollitia pariatur, dolor repellat quis doloribus id esse impedit ut. Obcaecati labore totam quam quia aut iusto sunt reiciendis, nesciunt assumenda!</p>
                <button className='btn'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512">
                            <path d="M19.749,9.464,5,.048V23.989L19.743,14.54a3,3,0,0,0,.006-5.076Z" />
                        </svg>
                    </div>
                    Watch Movie
                </button>
            </div>
            <div className="imgDiv">
                <div className="img1">
                    <img className='image1' src={image1} alt="" />
                </div>
                <img className='image2' src={image2} alt="" />
            </div>
        </div>
    )
}

export default Hero