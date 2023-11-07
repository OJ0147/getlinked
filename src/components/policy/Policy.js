import {useEffect} from 'react'
import secureGuy from '../../assets/secure-guy.svg'
import "./Policy.css"
import check from '../../assets/list-check.svg'
import purpleStar from '../../assets/starpurp.svg'
import purpleStar1 from '../../assets/purp-sta.svg'
import whiteStar from '../../assets/star.svg'
import greyStar from '../../assets/star-grey.png'
import flare from "../../assets/head-purple-flare.png"
import Aos from 'aos';
import 'aos/dist/aos.css'

const Policy = () => {

    useEffect(()=>{
        Aos.init()
    },[])

  return (
    <>
        <div className="flex__wrapper policy__wrapper">
            <div className=" flex_txt">
                <div className="overflow-wrap">
                <h3 data-aos='fade-left' data-aos-delay="1000" className='header__span'>Privacy Policy and <span>Terms</span></h3>
                <p data-aos='fade-right' data-aos-delay="1200" className="first-parag">Last updated on September 12, 2023</p>
                <p data-aos='fade-right' data-aos-delay="1400" className="second-parag">
                    Below are our privacy & policy, which outline a lot of goodies. 
                    it’s our aim to always take of our participant
                </p>
                </div>
                <div data-aos='fade-up' data-aos-delay="1600" className="policy-box">
                    <p >
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose, 
                        and safeguard your data when you participate in our tech 
                        hackathon event. By participating in our event, you consent 
                        to the practices described in this policy.
                    </p>
                    <h4>Licensing Policy</h4>
                    <p className='list-txt'>Here are terms of our Standard License:</p>
                    <ul>
                        <li>
                            <img src={check} alt="green-checked-marks" />
                            <p>
                                The Standard License grants you a non-exclusive right to
                                navigate and register for our event
                            </p>
                        </li>
                        <li>
                            <img src={check} alt="green-checked-marks" />
                            <p>
                                You are licensed to use the item available at any free source
                                sites, for your project developement
                            </p>
                        </li>
                    </ul>

                    <a href="#read" className="btn"> Read More</a>
                </div>

            </div>
            <div data-aos='fade-down' data-aos-delay="1600" className="flex_img policy_img">
                <img src={secureGuy} alt="privacy-policy-img-3D" />
            </div>
            <img src={purpleStar} alt="background-asset" className='sec-bg-img asset1 anim_stars' />
            <img src={purpleStar1} alt="background-asset" className='sec-bg-img asset2 anim_delay1' />
            <img src={whiteStar} alt="background-asset" className='sec-bg-img asset3 anim_delay2' />
            <img src={greyStar} alt="background-asset" className='sec-bg-img asset4 anim_stars' />
            <img src={purpleStar} alt="background-asset" className='sec-bg-img asset5 anim_delay2' />
            <img src={whiteStar} alt="background-asset" className='sec-bg-img asset6 anim_delay1' />
            <img src={greyStar} alt="background-asset" className='sec-bg-img asset7 anim_stars' />
            <img src={flare} alt="background-asset" className='sec-bg-img full-flare' />
        </div>
    
    </>
  )
}

export default Policy