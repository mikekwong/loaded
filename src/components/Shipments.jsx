import React from 'react'
import dryvan from '../icons/icon_truck_dryvan.svg'

const Shipments = ({ ...shipment }) => {
  const { fare, equipmentType, equipmentSize, stops } = shipment
  return (
    <div className='shipments'>
      <div className='shipments-container'>
        <ul className='shipments-equipment'>
          <li className='shipments-equipment-item'>
            <img className='dryvan' alt='dryvan' src={dryvan} /> {equipmentType}{' '}
            {equipmentSize}"
          </li>
          <li className='shipments-equipment-item shipment-cost'>
            ${priceWithCommas(fare)}
          </li>
        </ul>
        <div className='shipments-transfer'>
          <ul className='shipment-route shipments-pickup'>
            <li>
              {stops[0].city}, {stops[0].state} {stops[0].zipcode}
            </li>
            <li>Wednesday, 01, August, 2015</li>
          </ul>
          <div className='shipment-route shipments-arrow'>></div>
          <ul className='shipment-route shipments-deliver'>
            <li>
              {stops[1].city}, {stops[1].state} {stops[1].zipcode}
            </li>
            <li>Wednesday, 01, August, 2015</li>
          </ul>
        </div>
      </div>
    </div>
  )

  function priceWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

export default Shipments
