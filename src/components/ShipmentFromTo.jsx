import React from 'react'
import { convertDate } from '../utils'

const PickupDelivery = ({
  number,
  pickupDelivery,
  type,
  icon1,
  icon2,
  icon1Name,
  icon2Name
}) => {
  return (
    <div className='shipment-single-content shipment-single-wrapper'>
      <div className='shipment-single-content shipment-single-number'>
        {number}
      </div>
      <div className='shipment-single-content shipment-single-pickup-delivery'>
        <p>{type}</p>
        <p>
          {pickupDelivery.city}, {pickupDelivery.state} {pickupDelivery.zipcode}
        </p>
        <p>{convertDate(pickupDelivery.windowStart)}</p>
        <ul>
          <li>
            <img
              className='shipment-single-icon'
              src={icon1}
              alt='Pallet Jack'
            />
            {icon1Name}
          </li>
          <li>
            <img className='shipment-single-icon' src={icon2} alt='Airport' />
            {icon2Name}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PickupDelivery
