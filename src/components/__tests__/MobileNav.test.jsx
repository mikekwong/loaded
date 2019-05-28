import React from 'react'
import { shallow } from 'enzyme'
import MobileNav from '../navigation/MobileNav'

let wrapper

beforeEach(() => {
  wrapper = shallow(<MobileNav />)
})

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should render a <button />', () => {
  expect(wrapper.find('button').length).toEqual(1)
})

it('should render 2 <span />', () => {
  expect(wrapper.find('span').length).toEqual(2)
})

it('should render a <ul />', () => {
  expect(wrapper.find('ul').length).toEqual(1)
})

it('should render a <a />', () => {
  expect(wrapper.find('a').length).toEqual(1)
})

it('should render a <img />', () => {
  expect(wrapper.find('img').length).toEqual(1)
})

it('should render a <ul />', () => {
  expect(wrapper.find('ul').length).toEqual(1)
})

it('should render a <img />', () => {
  expect(wrapper.find('img').length).toEqual(1)
})

it('should render a <li />', () => {
  expect(wrapper.find('li').length).toEqual(5)
})
