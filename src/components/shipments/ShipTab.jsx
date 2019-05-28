import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class shipTab extends Component {
  static propTypes = {
    activeTab: PropTypes.object.isRequired,
    label: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
  }

  onClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render () {
    const {
      onClick,
      props: { activeTab, label }
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
