import React from 'react'
import dryVan from '../icons/icon_truck_dryvan.svg'
import { addCommas } from '../utils'
import ShipmentsFromTo from './ShipmentsFromTo'

const Shipments = ({ fare, equipmentType, equipmentSize, stops }) => {
  return (
    <div className='shipments-list-container'>
      <ul className='shipments-list-equipment'>
        <li className='shipments-list-equipment-item'>
          <img className='dryvan' alt='Dry Van' src={dryVan} />{' '}
          {equipmentType === 'DRV' ? 'Dry Van' : equipmentType} {equipmentSize}"
        </li>
        <li className='shipments-list-equipment-item shipments-list-cost'>
          ${addCommas(fare)}
        </li>
      </ul>
      <div className='shipments-list-transfer'>
        <ShipmentsFromTo
          stops={stops[0]}
          classLabel={'shipments-list-pickup'}
        />
        <div className='shipments-list-route shipments-list-arrow'>></div>
        <ShipmentsFromTo
          stops={stops[1]}
          classLabel={'shipments-list-pickup'}
        />
      </div>
    </div>
  )
}

export default Shipments
