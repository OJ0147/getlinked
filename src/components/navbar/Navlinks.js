import React from 'react'
import { Link } from 'react-router-dom'


const Navlinks = ({closeMenu}) => {
  return (

    <div className="nav_links">
        <ul onClick={closeMenu}>
            <li> <a href="#timeline" > Timeline </a> </li>
            <li> <a href="#overview" > Overview </a></li>
            <li> <a href="/#faqs">FAQs</a> </li>
            <li> <Link to="contact">Contact</Link> </li>
            <li> <Link to="registration" className='btn'>Register</Link> </li>
        </ul>

    </div>
  )
}

export default Navlinks