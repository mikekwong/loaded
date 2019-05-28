import React from 'react'
import { shallow } from 'enzyme'

import ShipmentSingle from '../shipments/ShipmentSingle'
import ShipmentFromTo from '../shipments/ShipmentFromTo'

let wrapper

beforeEach(() => {
  wrapper = shallow(<ShipmentSingle />)
})

it('should render correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

it('should render 2 <div />', () => {
  expect(wrapper.find('div').length).toEqual(2)
})
