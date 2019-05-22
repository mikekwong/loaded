import React from 'react'
import dryVan from '../icons/icon_truck_dryvan.svg'

const Shipments = ({ ...shipment }) => {
  const { fare, equipmentType, equipmentSize, stops } = shipment
  return (
    <div className='shipments-list-container'>
      <ul className='shipments-list-equipment'>
        <li className='shipments-list-equipment-item'>
          <img className='dryvan' alt='Dry Van' src={dryVan} />{' '}
          {equipmentType === 'DRV' ? 'Dry Van' : equipmentType} {equipmentSize}"
        </li>
        <li className='shipments-list-equipment-item shipment-cost'>
          ${priceWithCommas(fare)}
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

  function priceWithCommas (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  function convertDate (dateInput) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]

    const days = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]

    let converted = new Date(dateInput)
    let day = days[converted.getDay()]
    let date = converted.getDate()
    let month = months[converted.getMonth()]
    let year = converted.getFullYear()

    return `${day}, ${date} ${month}, ${year}`
  }
}

export default Shipments
