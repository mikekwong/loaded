import React from 'react'
import logo from '../icons/logo.svg'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <div className='nav-content'>
      <a href='/' className='nav-logo'>
        <img alt='Logo' src={logo} />
      </a>
      <ul className='nav-items'>
        <li className='nav-item'>
          <i className='fas fa-phone phone-icon' />
          (646) 887 6278
        </li>
        <li className='nav-item'>Shipper</li>
        <li className='nav-item'>Become a carrier</li>
        <li className='nav-item'>Login</li>
        <li className='nav-item'>Sign Up</li>
      </ul>
      {/* Beginning of mobile navigation */}
      <MobileNav />
      {/* end of mobile navigation */}
    </div>
  )
}

export default Navbar
