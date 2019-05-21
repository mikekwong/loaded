import React from 'react'
import logo from '../icons/logo.svg'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav-content'>
        <img className='nav-logo' alt='Logo' src={logo} />
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
      </div>
    </nav>
  )
}

export default Navbar
