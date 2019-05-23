import React from 'react'
import { convertDate } from '../utils'

const ShipmentsFromTo = ({ stops, from }) => {
  return (
    <>
      <ul
        className={
          'shipments-list-route ' +
          (from ? ' shipments-list-pickup' : 'shipments-list-deliver')
        }
      >
        <li>
          {stops.city}, {stops.state} {stops.zipcode}
        </li>
        <li>{convertDate(stops.windowStart)}</li>
      </ul>
    </>
  )
}

export default ShipmentsFromTo
