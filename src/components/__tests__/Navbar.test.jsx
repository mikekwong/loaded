import React from 'react'
import { shallow } from 'enzyme'

import Navbar from '../navigation/Navbar'
import MobileNav from '../navigation/MobileNav'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Navbar />)
})

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should render a <div />', () => {
  expect(wrapper.find('div').length).toEqual(1)
})

it('should render a <a />', () => {
  expect(wrapper.find('a').length).toEqual(1)
})

it('should render a <ul />', () => {
  expect(wrapper.find('ul').length).toEqual(1)
})

it('should render 5 <li />', () => {
  expect(wrapper.find('li').length).toEqual(5)
})

it('should render a <img />', () => {
  expect(wrapper.find('img').length).toEqual(1)
})

it('should render the MobileNav Component', () => {
  expect(wrapper.containsMatchingElement(<MobileNav />)).toEqual(true)
})
