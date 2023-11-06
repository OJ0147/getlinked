import {useState, useEffect} from "react";
import purpstar from "../../assets/starpurp.svg";
import whitestar from "../../assets/star-white.png";
import greystar from "../../assets/star-grey.png";
import faq from "../../assets/cwon.png";
import "./Faqs.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';
import Aos from 'aos'
import "aos/dist/aos.css"

const Faqs = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <div className="flex__wrapper">
      <div className="faq_txt flex_txt">
        <h3 data-aos='zoom-in' data-aos-delay="1000"  className="header__span faqs_header">
          Frequently Ask <span>Question</span>
        </h3>
        <p data-aos='fade-up' data-aos-delay="1200" className="faqs_param">
          We got answers to the questions that you might want to ask about
          getlinked Hackathon 1.0
        </p>

        <div data-aos='fade-right' data-aos-delay="1200"  className="accordion" >  
          <Accordion 
            style={{ backgroundColor: "transparent", borderBottom:"2px solid #D434FE", padding:"0px 0px 5px" }}
            expanded={expanded === 'panel1'} 
            onChange={handleChange('panel1')} aria-controls="panel1a-content" id="panel1a-header"
             >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color:"#D434FE"}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Can I work on a project I started before the hackathon?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            style={{ backgroundColor: "transparent", borderBottom:"2px solid #D434FE", padding:"15px 0px 5px"}} 
            expanded={expanded === 'panel2'} 
            onChange={handleChange('panel2')}
            >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color:"#D434FE"}}/>}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What happens if I need help during the hackathon?</Typography>
            </AccordionSummary>
            <AccordionDetails style={{paddingLeft:0}}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            style={{ backgroundColor: "transparent", borderBottom:"2px solid #D434FE", padding:"15px 0px 5px" }} 
            expanded={expanded === 'panel3'} 
            onChange={handleChange('panel3')}
            >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color:"#D434FE"}}/>}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography>What happens if I don't have an idea for a project?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            style={{ backgroundColor: "transparent", borderBottom:"2px solid #D434FE", padding:"15px 0px 5px" }} 
            expanded={expanded === 'panel4'} 
            onChange={handleChange('panel4')}
            >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color:"#D434FE"}}/>}
              aria-controls="panel4a-content"
              id="panel4a-header"
            >
              <Typography>Can I join a team or do I have to come with one?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          
          <Accordion 
            style={{ backgroundColor: "transparent", borderBottom:"2px solid #D434FE", padding:"15px 0px 5px" }} 
            expanded={expanded === 'panel5'} 
            onChange={handleChange('panel5')}
            >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color:"#D434FE"}}/>}
              aria-controls="panel5a-content"
              id="panel5a-header"
            >
              <Typography>What happens after the hackathon ends</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion 
            style={{ backgroundColor: "transparent", borderBottom:"2px solid #D434FE", padding:"15px 0px 5px" }} 
            expanded={expanded === 'panel6'} 
            onChange={handleChange('panel6')}
            >
            <AccordionSummary
              expandIcon={<AddIcon style={{ color:"#D434FE"}}/>}
              aria-controls="panel6a-content"
              id="panel6a-header"
            >
              <Typography>Can I work on a project I started before the hackathon?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div data-aos='zoom-in-left' data-aos-delay="2000" className="flex_img faqs_img">
        <img src={faq} alt="" />
      </div>
      <img src={purpstar} alt="" className="bg-images img1 anim_delay1" />
      <img src={whitestar} alt="" className="bg-images img2 anim_delay2" />
      <img src={greystar} alt="" className="bg-images img3 anim_stars" />
      <img src={greystar} alt="" className="bg-images img4 anim_stars" />
      <img src={purpstar} alt="" className="bg-images img5 anim_delay1" />
    </div>
  );
};

export default Faqs;
