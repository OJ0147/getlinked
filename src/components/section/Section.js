import React, { useEffect } from 'react'
import "./Section.css"
import purpleStar from '../../assets/starpurp.svg'
import purpleStar1 from '../../assets/purp-sta.svg'
import whiteStar from '../../assets/star.svg'
import greyStar from '../../assets/star-grey.png'
import halfFlare from '../../assets/Purple-Lens-Flare-PNG.svg'
import flare from "../../assets/head-purple-flare.png"
import arrow from '../../assets/arrrow.svg'
import Aos from 'aos';
import "aos/dist/aos.css"



const Section = ({imageUrl, title, spanText, description}) => {

    useEffect(()=>{
        Aos.init({duration:"1500"})
    },[])
  return (
    <section className='section-wrapper flex__wrapper'>
        <div className="overflow-wrap">
        <div data-aos='fade-left' data-aos-delay="500" className="section_img flex_img" >
            <img src={imageUrl} alt="section" />
        </div>
        </div>
        <div className="overflow-wrap section_txt"> 
            <h3 data-aos="fade-left" data-aos-delay="600" className="header__span">
                {title}
                <span>
                {spanText}
                </span>
            </h3>                                                  
            <p data-aos='fade-right' data-aos-delay="700">{description} </p>
        </div>
        <img src={purpleStar} alt="background-asset" className='sec-bg-img asset1 anim_stars' />
        <img src={purpleStar1} alt="background-asset" className='sec-bg-img asset2 anim_delay1' />
        <img src={whiteStar} alt="background-asset" className='sec-bg-img asset3 anim_delay2' />
        <img src={greyStar} alt="background-asset" className='sec-bg-img asset4 anim_stars' />
        <img src={arrow} alt="background-asset" className='sec-bg-img arrow' />
        <img src={halfFlare} alt="background-asset" className='sec-bg-img half-flare' />
        <img src={flare} alt="background-asset" className='sec-bg-img full-flare' />
        
    </section>
  )
}

export default Section