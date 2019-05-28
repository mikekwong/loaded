import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Navbar from '../navigation/Navbar'
import Logistics from '../shipments/Logistics'

// initialize wrapped so it is accessible in each of the tests since they share common setup with App
let wrapper

beforeEach(() => {
  // shallow renders just app component and no children inside of it
  wrapper = shallow(<App />)
})

it('should render the Calculator Component', () => {
  expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true)
})

it('should render the Calculator Component', () => {
  expect(wrapper.containsMatchingElement(<Logistics />)).toEqual(true)
})
