import React, { Component } from 'react'
import Navbar from './Navbar'
import Shipments from './Shipments'
import ShipmentSingle from './ShipmentSingle'

import loadSmart from '../api/loadSmart'
import { Link } from 'react-router-dom'

// import shipments from '../json/shipments'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      error: null,
      shipments: []
    }
  }

  async getAllShipments () {
    try {
      const { data } = await loadSmart.get(`shipments.json`)
      this.setState({
        shipments: data,
        isLoading: false
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount () {
    this.getAllShipments()
  }

  render () {
    const { shipments, shipmentDetails, isLoading } = this.state
    return (
      <div className='shipments-tabs'>
        <div className='shipments-list'>
          {shipments.map(shipment => {
            return (
              <Link to={`/shipment/${shipment.id}`}>
                <Shipments key={shipment.id} {...shipment} />{' '}
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}
