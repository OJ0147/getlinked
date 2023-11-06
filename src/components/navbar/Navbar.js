import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/getlinked-logo.webp'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import menu from '../../assets/hamburger.svg'


const Navbar = () => {
  const[isActive, setIsActive]= useState(false)

  const toggleMenu =()=>{
    setIsActive(!isActive)
  }
  const closeMenu =()=>{
    setIsActive(false)
  }
  console.log(isActive)
  console.log(closeMenu)

  return (
    <nav >
      <div className='nav-wrapper'>
        <div className='logo'>
          <Link to="/">
            <img src={logo} alt="getlinked-logo" />
          </Link>
        </div>
        
        <DesktopNav/>
      
        <img src={menu} alt="hamburger menu" className='menu' onClick={toggleMenu} />
        
        <MobileNav openMenu={isActive} closeMenu={closeMenu} />
      </div>
    </nav>
  )
}

export default Navbar