import React from 'react'

const Shipments = ({ ...shipment }) => {
  const { fare, equipmentType, equipmentSize, stops } = shipment
  return (
    <div className='shipments'>
      <div className='shipments-equipment'>
        <p>
          {equipmentType} {equipmentSize}
        </p>
        <p>${priceWithCommas(fare)}</p>
      </div>
      <div className='shipments-pickup'>
        <p>
          {stops[0].city}, {stops[0].state}
        </p>
        <p>Wednesday, 01, August, 2015</p>
      </div>
      <div className='shipments-arrow'>></div>
      <div className='shipments-deliver'>
        <p>
          {stops[1].city}, {stops[1].state}
        </p>
        <p>Wednesday, 01, August, 2015</p>
      </div>
    </div>
  )

  function priceWithCommas (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
}

export default Shipments
