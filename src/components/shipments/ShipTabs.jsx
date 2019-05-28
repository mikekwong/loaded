import React, { Component } from 'react'
import ShipTab from './ShipTab'

export default class ShipTabs extends Component {
  constructor (props) {
    super(props)
    this.state = { activeTab: this.props.children[0].props.label }
  }

  onClickShipTab = tab => {
    this.setState({ activeTab: tab })
  }

  render () {
    const {
      onClickShipTab,
      props: { children },
      state: { activeTab }
    } = this

    return (
      <>
        {children.map((child, idx) => {
          const { label } = child.props

          return (
            <ShipTab
              activeTab={activeTab}
              key={idx}
              label={label}
              onClick={onClickShipTab}
            />
          )
        })}
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined
          return child.props.children
        })}
      </>
    )
  }
}
