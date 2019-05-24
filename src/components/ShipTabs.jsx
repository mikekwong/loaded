import React, { Component } from 'react'

export default class ShipTabs extends Component {
  constructor () {
    super()
    this.state = { selectTab: this.props.children[0].props.label }
  }

  onClickShipTab = tab => {
    this.setState({ selectTab: tab })
  }

  render () {
    const {
      onClickShipTab,
      props: { children },
      state: { selectTab }
    } = this

    return (
      <div className='shipTabs'>
        <ul className='shipTab-list'>
          {children.map(child => {
            const { label } = child.props

            return (
              <ShipTab
                selectTab={selectTab}
                key={label}
                onClick={onClickShipTab}
              />
            )
          })}
        </ul>
        <div className='tab-content'>
          {children.map(child => {
            if (child.props.label !== selectTab) return undefined
            return child.props.children
          })}
        </div>
      </div>
    )
  }
}
