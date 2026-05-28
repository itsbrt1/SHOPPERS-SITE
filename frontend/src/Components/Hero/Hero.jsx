import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-left'>
                <h2>
                NEW ARRIVALS ONLY</h2>
                <div>
                    <div className='hero-hand-icon'>
                        <h1>
                        <span>n</span>
                        <span>e</span>
                        <span>w</span>
                        </h1>
                        
                        <img src={hand_icon}/>
                    </div>
                    <h1>
                    <span>c</span>
                    <span>o</span>
                    <span>l</span>
                    <span>l</span>
                    <span>e</span>
                    <span>c</span>
                    <span>t</span>
                    <span>i</span>
                    <span>o</span>
                    <span>n</span>
                    </h1> 
                    <span> </span>
                    <h1><span>f</span>
                    <span>o</span>
                    <span>r</span>
                    <span> </span>
                    <span>e</span>
                    <span>v</span>
                    <span>e</span>
                    <span>r</span>
                    <span>y</span>
                    <span>o</span>
                    <span>n</span>
                    <span>e</span></h1>
                </div>
                <div className='hero-latest-btn'>
                    <div>Latest Collection</div>
                    <img src={arrow_icon}/>
                </div>
            </div>
            <div className='hero-right'>
                <img src={hero_image}/>
            </div>



        </div>
    )
}
export default Hero
