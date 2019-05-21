import React, { Component } from 'react'
import Navbar from './Navbar'
import Shipments from './Shipments'
import SingleShipment from './SingleShipment'

import loadSmart from '../api/loadSmart'

// import shipments from '../json/shipments'

export default class App extends Component {
  constructor () {
    super()
    this.state = { shipments: [] }
  }

  async componentDidMount () {
    try {
      const { data } = await loadSmart.get('shipments.json')
      this.setState({
        shipments: data
      })
    } catch (error) {
      console.error(error)
    }
  }

  async shipmentDetail (shipNumber) {
    try {
      const { data } = await loadSmart.get(`${shipNumber}`)
      this.setState({
        shipments: data
      })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { shipments } = this.state
    return (
      <div className='app'>
        <Navbar />
        <div className='shipment-logistics'>
          {shipments.map(shipment => {
            return <Shipments key={shipment.id} {...shipment} />
          })}
          {/* <SingleShipment /> */}
        </div>
      </div>
    )
  }
}
