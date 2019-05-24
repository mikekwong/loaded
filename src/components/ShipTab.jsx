import React, { Component } from 'react'
import loadSmart from '../api/loadSmart'
import Shipments from './Shipments'

export default class shipTab extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      error: null,
      shipments: [],
    }
  }

  async getAllShipments() {
    try {
      const { data } = await loadSmart.get('shipments.json')
      this.setState({
        isLoading: false,
        shipments: data,
      })
    } catch (error) {
      this.setState({ error, isLoading: false })
    }
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render() {
    const {
      onClick,
      props: { activeTab, label },
    } = this
    const { shipments, isLoading } = this.state

    let className = 'shipments-list-container'

    if (activeTab === label) {
      className += ' tab-list-active'
    }

    return (
      <div className={className} onClick={onClick}>
        {label}
      </div>
    )
  }
}
