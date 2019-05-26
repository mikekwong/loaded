import React from 'react'
import { convertDate, formatAccessorial } from '../utils'

const PickupDelivery = ({
  number,
  pickupDelivery,
  type,
  icon1,
  icon2,
  firstIconName,
  secondIconName,
}) => {
  console.log(secondIconName)
  return (
    <div className="shipment-single-content shipment-single-wrapper">
      <div className="shipment-single-content shipment-single-number">
        {number}
      </div>
      <div
        className={`shipment-single-content shipment-single-pickup-delivery shipment-single-pickup-delivery${number}`}
      >
        <p>{type}</p>
        <p>
          {pickupDelivery.city}, {pickupDelivery.state} {pickupDelivery.zipcode}
        </p>
        <p>{convertDate(pickupDelivery.windowStart)}</p>
        <ul>
          <li>
            <img
              className="shipment-single-icon"
              src={icon1}
              alt="Pallet Jack"
            />
            <p> {formatAccessorial(firstIconName)}</p>
          </li>
          <li>
            <img className="shipment-single-icon" src={icon2} alt="Airport" />
            {/* <p> {formatAccessorial(secondIconName)}</p> */}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PickupDelivery
