import React, { Component } from 'react'
import Navbar from './Navbar'
import Shipments from './Shipments'
import ShipmentSingle from './ShipmentSingle'

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
        <nav className='nav'>
          <Navbar />
        </nav>
        <section className='main'>
          <div className='shipments'>
            {shipments.map(shipment => {
              return (
                <Shipments
                  onClick={this.shipmentDetail}
                  key={shipment.id}
                  {...shipment}
                />
              )
            })}
          </div>
          <div className='shipment-single'>
            <ShipmentSingle />
          </div>
        </section>
      </div>
    )
  }
}
