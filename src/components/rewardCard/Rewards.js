import {useEffect} from 'react'
import RewardCard from "./RewardCard";
import trophy from "../../assets/trophy.svg";
import medalImg1 from "../../assets/gold-medal.svg";
import medalImg2 from "../../assets/silver-medal.svg";
import medalImg3 from "../../assets/bronze-medal.svg";
import purpstar from "../../assets/starpurp.svg";
import whitestar from "../../assets/star-white.png";
import greystar from "../../assets/star-grey.png";
import flare from "../../assets/head-purple-flare.png";
import './Rewards.css'
import Aos from "aos"
import "aos/dist/aos.css"

const Rewards = () => {
  useEffect(()=>{
    Aos.init()
  },[]);

  return (
    <div className="rewards-container">
      <div className="overflow-wrap rewards-top-txt">
        <h3 data-aos="fade-right" data-aos-delay="1150" className="header__span">
          Prizes and<span>Rewards</span>
        </h3>
        <p data-aos="fade-left" data-aos-delay="1200">Highlight of the prizes or rewards for winners and for participants</p>
      </div>

      <div className="rewards__wrapper flex__wrapper">
        <div data-aos="zoom-in-down" data-aos-delay="500" className="flex__img rewards__img">
          <img src={trophy} alt="trophy 3d" />
        </div>
        <div className="flex__txt rewards__txt">
          <div className="cards">
            <RewardCard anim ="fade-up" anim_delay="1200" reward="N300,000" position="2nd" medalImg={medalImg2} />
            <RewardCard anim ="fade-up" anim_delay="800"reward="N400,000" position="1st" medalImg={medalImg1} />
            <RewardCard anim ="fade-up" anim_delay="1500" reward="N150,000" position="3rd" medalImg={medalImg3} />
          </div>
        </div>
      </div>
          <img src={purpstar} alt="" className="bg-images img1 anim_delay1" />
          <img src={whitestar} alt="" className="bg-images img2 anim_delay2" />
          <img src={greystar} alt="" className="bg-images img3 anim_stars" />
          <img src={flare} alt="" className="bg-images flares center-flare" />
          <img src={flare} alt="" className="bg-images flares side-flare" />
    </div>
  );
};

export default Rewards;
