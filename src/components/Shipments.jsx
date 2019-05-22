import React from 'react'
import dryVan from '../icons/icon_truck_dryvan.svg'
import { addCommas, convertDate } from './utils'

const Shipments = ({ fare, equipmentType, equipmentSize, stops }) => {
  // console.log(stops)
  return (
    <div className='shipments-list-container'>
      <ul className='shipments-list-equipment'>
        <li className='shipments-list-equipment-item'>
          <img className='dryvan' alt='Dry Van' src={dryVan} />{' '}
          {equipmentType === 'DRV' ? 'Dry Van' : equipmentType} {equipmentSize}"
        </li>
        <li className='shipments-list-equipment-item shipment-cost'>
          {addCommas(fare)}
        </li>
      </ul>
      <div className='shipments-list-transfer'>
        <ul className='shipments-list-route shipments-list-pickup'>
          <li>
            {stops[0].city}, {stops[0].state} {stops[0].zipcode}
          </li>
          <li>{convertDate(stops[0].windowStart)}</li>
        </ul>
        <div className='shipments-list-route shipments-list-arrow'>></div>
        <ul className='shipments-list-route shipments-list-deliver'>
          <li>
            {stops[1].city}, {stops[1].state} {stops[1].zipcode}
          </li>
          <li>{convertDate(stops[1].windowEnd)}</li>
        </ul>
      </div>
    </div>
  )
}

export default Shipments
