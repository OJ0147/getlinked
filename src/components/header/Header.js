import React, { useEffect } from 'react'
import chain from '../../assets/chain.svg'
import boom from '../../assets/boom.svg'
import bulb from '../../assets/bulb.png'
import starWhite from "../../assets/star-white.png"
import starGrey from "../../assets/star-grey.png"
import flare from "../../assets/head-purple-flare.png"
import line from "../../assets/line.svg"
import hero from '../../assets/hero-boy1.png'
import './Header.css'
import { Link } from 'react-router-dom'
import Countdown from '../countdown/Countdown'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Header = () => {

    useEffect(()=>{
        Aos.init({duration:"1000"})
    },[])

  return (
    <header>
        
        <img src={flare} alt="blurry-purple-background" className="bg-images flare-bg"/>
        <img src={starWhite} alt="star-white" className="bg-images star-white anim_stars"/>
        <img src={starGrey} alt="grey-star" className="bg-images star-grey anim_delay1"/>
        <img src={starGrey} alt="grey-star" className="bg-images star-grey1 anim_delay2 delayed2"/>

        <div data-aos='zoom-in' data-aos-delay="500" className="hero_headtext">
            <h3>Igniting a Revolution in HR Innovation</h3>
            <img src={line} alt="vector"/>
        </div>
        <div className="banner">
            <div className="banner_text">
                <div data-aos="fade-down" className='first-text'>
                    <h1>getlinked Tech</h1>
                    <img src={bulb} alt="idea-bulb" className='image-3d image_1' />
                </div>

                <div data-aos='fade-down' data-aos-delay="300" className="second-text">
                    <h1>Hackathon<span>1.0</span></h1>
                    <img src={chain} alt="linked-chain-3d" className='image_2' />
                    <img src={boom} alt="explosion-3d" className='image_3' />
                </div>
                
                <div className='overflow-wrap'>
                    <p data-aos='fade-right' data-aos-delay="500">
                        Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize.
                    </p>
                </div>
                <Link data-aos='fade-up' data-aos-delay="300" to="registration" className='btn header-btn'>Register</Link>
                <Countdown
                countdownTimestampMs={16436736999900}
                />
            </div>
            <div className="hero">

                <div className="hero_img">
                    <img src={hero} alt="man-wearing-smart-glasses" />
                </div>
            </div>
        </div>

    </header>
  )
}

export default Header