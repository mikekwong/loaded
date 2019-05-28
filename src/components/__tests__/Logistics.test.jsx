import React from 'react'
import { shallow } from 'enzyme'

import Logistics from '../shipments/Logistics'

let wrapper

beforeEach(() => {
  wrapper = shallow(<Logistics />)
})

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should render a <div />', () => {
  expect(wrapper.find('div').length).toEqual(2)
})
