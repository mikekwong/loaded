import React from 'react'
import { shallow } from 'enzyme'

// import Full Rendering
import { mount } from 'enzyme'
import Navbar from '../navigation/Navbar'
import MobileNav from '../navigation/MobileNav'

// initialize wrapped so it is accessible in each of the tests since they share common setup with App

// beforeEach(() => {
//   // shallow renders just app component and no children inside of it
// })

// it('renders the navigation text', () => {
//   const div = document.createElement('div')
//   ReactDOM.render(<Navbar />, div)

//   expect(div.innerHTML).toContain('Login')

//   ReactDOM.unmountComponentAtNode(div)
// })

it('shows the nav bar', () => {
  let wrapped = shallow(<Navbar />)

  expect(wrapped.find(MobileNav).length).toEqual(1)
})
