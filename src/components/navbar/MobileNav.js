import React from 'react'
import Navlinks from './Navlinks'
import './Navbar.css'
import close from '../../assets/close.svg'

const MobileNav = ({openMenu, closeMenu}) => {
    console.log(closeMenu, openMenu)
  return (
    
    <div className={openMenu? "mobile-nav isActive": "mobile-nav"}>
        <div className="close-menu">
          <img src={close} alt="times"  onClick={closeMenu} />
        </div>
        
        <Navlinks closeMenu={closeMenu} />
        
    </div>
  )
}

export default MobileNav