import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'
import App from '../App'
import Navbar from '../navigation/Navbar'
import Logistics from '../shipments/Logistics'

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should render two <div />', () => {
  expect(wrapper.find('div').length).toEqual(2)
})

it('should render a <nav />', () => {
  expect(wrapper.find('nav').length).toEqual(1)
})

it('should render the Navbar Component', () => {
  expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true)
})

it('should render the Logistics Component', () => {
  expect(wrapper.containsMatchingElement(<Logistics />)).toEqual(true)
})

it('should render the Router Component', () => {
  expect(wrapper.containsMatchingElement(<Route />)).toEqual(true)
})
