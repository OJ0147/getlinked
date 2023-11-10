import {useState} from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import './Contact.css';
import purpleStar from '../../assets/starpurp.svg'
import purpleStar1 from '../../assets/purp-sta.svg'
import whiteStar from '../../assets/star.svg'
import greyStar from '../../assets/star-grey.png'
import halfFlare from '../../assets/Purple-Lens-Flare-PNG.svg'
import flare from "../../assets/head-purple-flare.png"
import Notiflix from 'notiflix';
import axios from 'axios';


const Contact = () => {
  // local state for all form inputs
  const[formData, setFormData] = useState({
    first_name : "",
    email: "",
    message:"",
  })
  

  // input field change handler
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

// to send input data to rest api
  const sendMessage = async(e) => {
    e.preventDefault();
   
      try{
        let response = await axios.post("https://backend.getlinked.ai/hackathon/contact-form", formData);
        console.log(response.status);
        Notiflix.Notify.success('Message sent successfully');

        // clears out the form input after submitting
        setFormData({
          first_name: "",
          email: "",
          message: "",
        });

      }
      catch(error){
        console.log(error.message)
        Notiflix.Notify.failure(error.message);
      }

  }

  return (
    <div className='flex__wrapper contact__wrapper'>
      <div className="contact-infos">
        <h2>Get in touch</h2>

        <p className='address'> 27, Alara Street Yaba 100012, Lagos State </p>

        <a href="tel:+2347067981819" className='call'> Call Us : 07067981819</a>

        <p>we are open from Monday-Friday<br/>08:00am - 05:00pm</p> 
        <small>Share on</small>
        <ul className='social-links' >
          <li><a href="instagram.com"><FaInstagram/></a></li>
          <li><a href="twitter.com"><FaXTwitter/> </a></li>
          <li><a href="facebook.com"><FaFacebookF/></a></li>
          <li><a href="linkedin.com"> <FaLinkedinIn/> </a></li>
        </ul>
      </div>

      <div className="contact-form">
        <div className="form-wrapper">
          <h4>Questions or need assistance?<br/>Let us know about it!</h4>
          <form action="POST" onSubmit={sendMessage}>
            <div className="form-control">
              <input type="text" name='first_name'  value={formData.first_name} onChange={handleChange} placeholder='First Name' />
            </div>

            <div className="form-control">
              <input type="email" name='email'  value={formData.email} onChange={handleChange} placeholder='Mail'/>
            </div>

            <div className="form-control">
              <textarea name="message" cols="30" rows="7"  value={formData.message} onChange={handleChange} placeholder='Message'></textarea>
            </div>
            <button type='submit' className="btn">Submit</button>
          </form>
        
        </div>
      </div>
      <img src={purpleStar} alt="background-asset" className='sec-bg-img asset1 anim_stars' />
      <img src={purpleStar1} alt="background-asset" className='sec-bg-img asset2 anim_delay1' />
      <img src={whiteStar} alt="background-asset" className='sec-bg-img asset3 anim_delay2' />
      <img src={greyStar} alt="background-asset" className='sec-bg-img asset4 anim_stars' />
      <img src={halfFlare} alt="background-asset" className='sec-bg-img half-flare' />
      <img src={flare} alt="background-asset" className='sec-bg-img full-flare' />
    </div>
  )
}

export default Contact