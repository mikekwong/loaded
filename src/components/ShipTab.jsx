import React, { Component } from 'react'

export default class shipTab extends Component {
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
