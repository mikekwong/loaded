import React, { Component } from 'react'
import loadSmart from '../api/loadSmart'
import Shipments from './Shipments'
import { Link } from 'react-router-dom'

export default class shipTab extends Component {
  constructor() {
    super()
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

    let className = 'shipments-list-container'

    if (activeTab === label) {
      className += ' active'
    }

    return (
      <div className={className} onClick={onClick}>
        {label}
      </div>
    )
  }
}
