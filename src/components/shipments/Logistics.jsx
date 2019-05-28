import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shipments from './Shipments'
import ShipTabs from './ShipTabs'
import loadSmart from '../../api/loadSmart'
export default class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      error: false,
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
    const { shipments, isLoading } = this.state
    return (
      <div className='shipments-tabs'>
        <div className='shipments-list'>
          {!isLoading ? (
            <ShipTabs>
              {shipments.map(shipment => {
                return (
                  <div
                    key={shipment.id}
                    label={
                      <Link to={`/shipment/${shipment.id}`}>
                        <Shipments key={shipment.id} {...shipment} />
                      </Link>
                    }
                  />
                )
              })}
            </ShipTabs>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    )
  }
}
