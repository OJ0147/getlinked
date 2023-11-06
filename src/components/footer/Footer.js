import React from 'react';
import './Footer.css'
import logo from '../../assets/getlinked-logo.webp'
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import {FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter} from "react-icons/fa6"

const Footer=()=>{
    return(
        <footer>
            <div className="footer_3_col">
                <div className="col_1">
                    <div className="top">
                        <img src={logo} alt="" />
                        <small>
                            Getlinked Tech Hackathon innovation program established by a group with the aim of showcasing young and talented individuals in the field of technology
                        </small>
                    </div>

                    <div className='bottom'>
                        
                            <a href='#home'>Terms of Use</a>
                        
                            <a href="#home"> Privacy Policy</a>
                        
                    </div>
                </div>

                <div className="col_2">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#overview">Overview</a></li>
                        <li><a href="#timeline">Timeline</a></li>
                        <li><a href="#faq">FAQS</a></li>
                        <li><Link to="../../pages/register/Register.js">Register</Link></li>
                    </ul>

                    <div className="socials-wrapper">
                        <small>Follow us</small>
                        <ul>
                            <li><a href="instagram.com"><FaInstagram/></a></li>
                            <li><a href="twitter.com"><FaXTwitter/> </a></li>
                            <li><a href="facebook.com"><FaFacebookF/></a></li>
                            <li><a href="linkedin.com"> <FaLinkedinIn/> </a></li>
                        </ul>
                    </div>
                </div>

                <div className="col3">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <a href="tel:+23467981819">
                                <span><PhoneIcon/></span> 
                                <small>+234 679 81819</small>
                            </a>
                        </li>
                        <li>
                            <a href="#goolemaps">
                                <span><LocationOnIcon/></span>
                                <small>27, Alara Street Yaba 100012 Lagos State </small>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer_1_col">
                <small>
                    All rights reserved. &copy; getlinked Ltd
                </small>
            </div>
        </footer>
    
    )
}
export default Footer;