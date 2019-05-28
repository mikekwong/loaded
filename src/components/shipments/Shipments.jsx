import React from 'react'
import PropTypes from 'prop-types'
import { addCommas } from '../../utils'
import ShipmentsFromTo from './ShipmentsFromTo'
import dryVan from '../../icons/icon_truck_dryvan.svg'

const Shipments = ({ active, fare, equipmentType, equipmentSize, stops }) => {
  return (
    <>
      <ul className='shipments-list-equipment'>
        <li className='shipments-list-equipment-item'>
          <img className='dryvan' alt={equipmentType} src={dryVan} />{' '}
          {equipmentType === 'DRV' ? 'Dry Van' : equipmentType} {equipmentSize}"
        </li>
        <li className='shipments-list-equipment-item shipments-list-cost'>
          ${addCommas(fare)}
        </li>
      </ul>
      <div className='shipments-list-transfer'>
        <ShipmentsFromTo stops={stops[0]} />
        <div className='shipments-list-route shipments-list-arrow'>></div>
        <ShipmentsFromTo stops={stops[1]} />
      </div>
    </>
  )
}

Shipments.propTypes = {
  fare: PropTypes.number.isRequired,
  equipmentType: PropTypes.string.isRequired,
  equipmentSize: PropTypes.string.isRequired,
  stops: PropTypes.array.isRequired
}

export default Shipments
