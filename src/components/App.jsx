import React, { Component } from 'react'
import Navbar from './Navbar'
import Shipments from './Shipments'
import ShipmentSingle from './ShipmentSingle'
import ShipTabs from './ShipTabs'

import loadSmart from '../api/loadSmart'

// import shipments from '../json/shipments'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      error: null,
      shipments: [],
      shipmentDetails: [],
    }
  }

  async getAllShipments() {
    try {
      const [allShipments, singleShipment] = await Promise.all([
        loadSmart.get('shipments.json'),
        loadSmart.get('shipment-1.json'),
      ])
      this.setState({
        isLoading: false,
        shipments: allShipments.data,
        shipmentDetails: singleShipment.data,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  componentDidMount() {
    this.getAllShipments()
  }

  async selectShipment(id) {
    try {
      const { data } = await loadSmart.get(`shipment-${id}.json`)
      this.setState({
        isLoading: false,
        shipmentDetails: data,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  render() {
    const { shipments, shipmentDetails, isLoading } = this.state
    return (
      <div className="app">
        <nav className="nav">
          <Navbar />
        </nav>
        <section className="main">
          {!isLoading ? (
            <ShipTabs>
              {shipments.map(shipment => {
                return (
                  <div
                    onClick={() => this.selectShipment(shipment.id)}
                    key={shipment.id}
                    label={
                      <Shipments
                        // shipmentDetail={() => this.shipmentDetail()}
                        active={this.state.active}
                        // key={shipment.id}
                        {...shipment}
                      />
                    }
                  >
                    <div
                      // onClick={() => this.shipmentDetail(1)}
                      className="shipment-single"
                    >
                      <ShipmentSingle
                        key={shipmentDetails.id}
                        {...shipmentDetails}
                      />
                    </div>
                  </div>
                )
              })}
            </ShipTabs>
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </div>
    )
  }
}
