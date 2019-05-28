import React, { Component } from 'react'
import logo from '../../icons/logo.svg'

export default class MobileNav extends Component {
  constructor () {
    super()
    this.state = {
      active: false
    }
  }

  toggleClass = () => {
    const currentState = this.state.active
    this.setState({ active: !currentState })
  }

  render () {
    return (
      <>
        <button
          id='burger'
          className={
            'hamburger hamburger--collapse' +
            (this.state.active ? ' is-active' : '')
          }
          type='button'
          onClick={this.toggleClass}
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner' />
          </span>
        </button>
        <a className='nav-item-burger-logo' href='/'>
          <img alt='Logo' src={logo} />
        </a>
        <ul
          className={
            this.state.active
              ? 'nav-items-burger flex-display '
              : 'nav-items-burger'
          }
        >
          <li className='nav-item-burger'>
            <i className='fas fa-phone phone-icon' />
            (646) 887 6278
          </li>
          <li className='nav-item-burger'>Shipper</li>
          <li className='nav-item-burger'>Become a Carrier</li>
          <li className='nav-item-burger'>Login</li>
          <li className='nav-item-burger'>Sign Up</li>
        </ul>
      </>
    )
  }
}
