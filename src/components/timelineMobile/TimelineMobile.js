import {useEffect} from 'react'
import { timelineData } from '../timelineData'
import './TimelineMobile.css'
import Aos from "aos";
import 'aos/dist/aos.css'

const TimelineMobile = () => {
    useEffect(() => {
        Aos.init()
    }, []);
  return (
    <div>
        {timelineData.map(({id, title,details, date})=>{
            return(
                <div key={id} className="timeline_mobile">
                    <div className="overflow-wrap timeline_top">
                        <div data-aos="fade-down" data-aos-delay="1000" className="line_mobile"></div>
                        <div data-aos="fade-left" data-aos-delay="1150" className="timeline_mobile_txt">
                            <h3>{title} </h3>
                            <p>{details} </p>
                        </div>
                    </div>

                    <div className="timeline_bottom">
                        <span data-aos="zoom-in" data-aos-delay="1050">
                            <h4>{id}</h4>
                        </span>
                        <h3 data-aos="fade-up" data-aos-delay="1100">{date}</h3>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default TimelineMobile