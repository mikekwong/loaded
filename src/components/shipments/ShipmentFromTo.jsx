import React from 'react'
import PropTypes from 'prop-types'
import { convertDate, convertTime, formatAccessorial } from '../../utils'

const ShipmentFromTo = ({
  number,
  pickupDelivery,
  type,
  startTime,
  endTime,
  icon1,
  icon2,
  firstIconName,
  secondIconName
}) => {
  return (
    <div className='shipment-single-content shipment-single-wrapper'>
      <div className='shipment-single-content shipment-single-number'>
        {number}
      </div>
      <div
        className={`shipment-single-content shipment-single-pickup-delivery shipment-single-pickup-delivery${number}`}
      >
        <p>{type}</p>
        <p>
          {pickupDelivery.city}, {pickupDelivery.state} {pickupDelivery.zipcode}
        </p>
        <p>
          {convertDate(pickupDelivery.windowStart)}{' '}
          <span>
            {convertTime(startTime)} - {convertTime(endTime)}
          </span>
        </p>
        <ul>
          <li>
            <img
              className='shipment-single-icon'
              src={icon1}
              alt={firstIconName}
            />
            <p className='accessorial'>{formatAccessorial(firstIconName)}</p>
          </li>
          <li>
            <img
              className='shipment-single-icon'
              src={icon2}
              alt={secondIconName}
            />
            {secondIconName ? (
              <p className='accessorial'>{formatAccessorial(secondIconName)}</p>
            ) : null}
          </li>
        </ul>
      </div>
    </div>
  )
}

ShipmentFromTo.propTypes = {
  number: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  pickUpDelivery: PropTypes.object,
  firstIconName: PropTypes.string.isRequired,
  secondIconName: PropTypes.string
}

export default ShipmentFromTo
