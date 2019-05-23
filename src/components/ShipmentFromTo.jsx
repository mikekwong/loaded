import React from 'react'
import { convertDate } from '../utils'

const PickupDelivery = ({
  pickupDelivery,
  icon1,
  icon2,
  icon1Name,
  icon2Name
}) => {
  return (
    <div className='shipment-single-content shipment-single-pickup-delivery'>
      <p>Pick-Up</p>
      <p>
        {pickupDelivery.city}, {pickupDelivery.state} {pickupDelivery.zipcode}
      </p>
      <p>{convertDate(pickupDelivery.windowStart)}</p>
      <ul>
        <li>
          <img className='shipment-single-icon' src={icon1} alt='Pallet Jack' />
          {icon1Name}
        </li>
        <li>
          <img className='shipment-single-icon' src={icon2} alt='Airport' />
          {icon2Name}
        </li>
      </ul>
    </div>
  )
}

export default PickupDelivery
