import React, { Component } from 'react'
import Navbar from './Navbar'
import Shipments from './Shipments'
import ShipmentSingle from './ShipmentSingle'

import loadSmart from '../api/loadSmart'

// import shipments from '../json/shipments'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      error: null,
      shipments: [],
      shipmentDetails: []
    }
  }

  async getAllShipments () {
    try {
      const [allShipments, singleShipment] = await Promise.all([
        loadSmart.get('shipments.json'),
        loadSmart.get('shipment-1.json')
      ])
      this.setState({
        isLoading: false,
        shipments: allShipments.data,
        shipmentDetails: singleShipment.data
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount () {
    this.getAllShipments()
  }

  // async shipmentDetail (shipNumber) {
  //   try {
  //     const { data } = await loadSmart.get(`shipment-${shipNumber}.json`)
  //     this.setState({
  //       shipmentDetails: data
  //     })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  render () {
    const { shipments, shipmentDetails, isLoading } = this.state
    return (
      <div className='app'>
        <nav className='nav'>
          <Navbar />
        </nav>
        <section className='main'>
          <div className='shipments-list'>
            {shipments.map(shipment => {
              return (
                <Shipments
                  // shipmentDetail={() => this.shipmentDetail()}
                  key={shipment.id}
                  {...shipment}
                />
              )
            })}
          </div>
          {!isLoading ? (
            <div
              // onClick={() => this.shipmentDetail(1)}
              className='shipment-single'
            >
              <ShipmentSingle key={shipmentDetails.id} {...shipmentDetails} />
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    )
  }
}
