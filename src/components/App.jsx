import React, { Component } from 'react'
import Navbar from './Navbar'
import Shipments from './Shipments'
import SingleShipment from './SingleShipment'

import shipments from '../json/shipments'

export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        {shipments.map(shipment => {
          return <Shipments {...shipment} />
        })}
        {/* <SingleShipment /> */}
      </div>
    )
  }
}
