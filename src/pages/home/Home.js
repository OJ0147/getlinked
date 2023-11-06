import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import "./Home.css";
import Section from "../../components/section/Section";
import idea from "../../assets/big-idea-bulb.svg";
import ideaGirl from "../../assets/idea-girl.svg";
import piechart from "../../assets/piechart.png";
import purpstar from "../../assets/starpurp.svg";
import whitestar from "../../assets/star-white.png";
import greystar from "../../assets/star-grey.png";
import flare from "../../assets/head-purple-flare.png";
import ellipse from "../../assets/Ellipse-grad.png";
import Aos from "aos";
import "aos/dist/aos.css";
import Faqs from "../../components/faqs/Faqs";
import { timelineData } from "../../components/timelineData";
import Rewards from "../../components/rewardCard/Rewards";
import TimelineMobile from "../../components/timelineMobile/TimelineMobile";
import companyImg from '../../assets/company-grouped.png'
import Policy from "../../components/policy/Policy";
import Footer from "../../components/footer/Footer";

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="home-container">
      <div>
        <Header />
      </div>
      <section className="intro" styles={{ height: "90vh" }}>
        <Section
          imageUrl={idea}
          title="Introduction to getlinked"
          spanText="tech Hackathon 1.0"
          description="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
        />
        <Section
          imageUrl={ideaGirl}
          title="Rules and"
          spanText="Guidelines"
          description="Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future. Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform your ideas into reality. Solving real-world problems, pushing the boundaries of technology, and creating solutions that can change the world, that's what we're all about!"
        />
      </section>
      <main className="flex__wrapper" id="overview">
        <div className="flex_img" data-aos="zoom-in" data-aos-delay="500">
          <img src={piechart} alt="3D-piechart" />
        </div>
        <div className="flex_txt main_txt">
          <h3
            className="header__span"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Judging Criteria <span>Key attributes</span>
          </h3>
          <ul>
            <li data-aos="fade-right" data-aos-delay="700">
              <h4>Innovation and Creativity:</h4>
              <p>
                Evalute the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-delay="800">
              <h4>Functionality:</h4>
              <p>
                Assess how well the solution works. Does it perform its intended
                functions effectively and without major issues? Judges would
                consider the completeness and robustness of the solution.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-delay="900">
              <h4>Impact and Relevance:</h4>
              <p>
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
            </li>
            <li data-aos="fade-left" data-aos-delay="1000">
              <h4>Technical Complexity:</h4>
              <p>
                Evalute the technical sophistication of the solution. Judges
                would consider the complexity of the code. the use of advanced
                technologies or algorithms, and scalability of the solution.
              </p>
            </li>
            <li data-aos="fade-right" data-aos-delay="1100">
              <h4>Adherence to Hackathon Rules:</h4>
              <p>
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </li>
          </ul>

          <a
            data-aos="fade-up"
            data-aos-delay="1200"
            className="btn"
            href="#read"
          >
            Read More
          </a>
        </div>
        <img src={purpstar} alt="" className="bg-images img1 anim_delay1" />
        <img src={whitestar} alt="" className="bg-images img2 anim_delay2" />
        <img src={greystar} alt="" className="bg-images img3 anim_stars" />
        <img src={flare} alt="" className="bg-images flares center-flare" />
        <img src={flare} alt="" className="bg-images flares side-flare" />
        <img src={ellipse} alt="" className="bg-images ellipse" />
      </main>
      <div className="faq" id="faqs">
        <Faqs />
      </div>
      <div className="time-line" id='timeline'>
        <h3
          data-aos="fade-right"
          data-aos-delay="900"
          className="header__span timeline__header"
        >
          Timeline
        </h3>
        <p
          data-aos="fade-left"
          data-aos-delay="950"
          className="timeline__parag"
        >
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <main className="timeline_container">
          {/* <!-- timeline --> */}
          {timelineData.map(({ date, details, title, id }) => {
            return (
              <div className="timeline_wrapper" key={id}>
                <div data-aos="fade-left" data-aos-delay="1100" className="timeline_title">
                  <h3>{title}</h3>
                  <p>{details} </p>
                </div>
                <div className="timeline_middle">
                  <div data-aos="fade-down" data-aos-delay="1000" className="line"></div>
                  <span data-aos="zoom-in" data-aos-delay="1050">
                    <h4>{id}</h4>
                  </span>
                </div>

                <div data-aos="fade-right" data-aos-delay="1150" className="timeline_date">
                  <h3>{date} </h3>
                </div>
                
              </div>
            );
          })}
          {/* mobile timeline */}
          <TimelineMobile/>
          <img src={purpstar} alt="" className="bg-images img1 anim_delay1" />
          <img src={whitestar} alt="" className="bg-images img2 anim_delay2" />
          <img src={greystar} alt="" className="bg-images img3 anim_stars" />
        </main>
      </div>
      {/* rewards-section */}
      <>
        <Rewards/>
      </>
      <div className="partners-wrapper">
        <h3 data-aos="zoom-in" data-aos-delay="900" className="header__span">
          Partners and Sponsors
        </h3>
        <p data-aos="fade-left" data-aos-delay="1000" >Getlinked Hackathon 1.0 is honored to have the following major companies as it's partners and sponsors</p>
        <div data-aos="fade-up" data-aos-delay="1200" className="partners-logo-container">
            <img src={companyImg} alt="partners-logo" />
    
        </div> 
        <img src={purpstar} alt="" className="bg-images part-purp anim_delay1" />
        <img src={whitestar} alt="" className="bg-images part-white anim_delay2" />
        <img src={purpstar} alt="" className="bg-images part-grey anim_stars" />
        <img src={flare} alt="" className="bg-images flares partner-flare1 " />
        <img src={flare} alt="" className="bg-images flares partner-flare2" />
      </div>

      <>
        <Policy/>
      </>
      <>
        <Footer/>
      </>
    </div>
  );
};

export default Home;
