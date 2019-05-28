import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import Navbar from '../navigation/Navbar'
import Logistics from '../shipments/Logistics'
import ShipmentSingle from '../shipments/ShipmentSingle'

// initialize wrapped so it is accessible in each of the tests since they share common setup with App
let wrapped

beforeEach(() => {
  // shallow renders just app component and no children inside of it
  wrapped = shallow(<App />)
})

it('shows the nav bar', () => {
  expect(wrapped.find(Navbar).length).toEqual(1)
})

it('shows logistics', () => {
  expect(wrapped.find(Logistics).length).toEqual(1)
})
