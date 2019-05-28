import React from 'react'
import PropTypes from 'prop-types'
import { convertDate } from '../../utils'

const ShipmentsFromTo = ({ stops }) => {
  return (
    <>
      <ul className='shipments-list-route'>
        <li>
          {stops.city}, {stops.state} {stops.zipcode}
        </li>
        <li>{convertDate(stops.windowStart)}</li>
      </ul>
    </>
  )
}

ShipmentsFromTo.propTypes = {
  stops: PropTypes.object.isRequired
}

export default ShipmentsFromTo
