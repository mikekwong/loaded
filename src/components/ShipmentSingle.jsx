import React from 'react'
import palletJack from '../icons/icon_accessorial_pallet_jack.svg'
import airport from '../icons/icon_accessorial_airport.svg'
import lumper from '../icons/icon_accessorial_lumper.svg'
import liftGate from '../icons/icon_accessorial_lift_gate.svg'
import dryVan from '../icons/icon_truck_dryvan.svg'

const ShipmentSingle = props => {
  return (
    <div className='shipment-single-container'>
      <div className='shipment-single-content shipment-single-routes'>
        <p>
          Jersey City, NJ <span>></span> Bermuda, NJ
        </p>
      </div>
      <div className='shipment-single-content shipment-single-pickup'>
        <p>Pick-Up</p>
        <p>Jersey City, NJ 17011</p>
        <p>Thursday, 14 July, 2015</p>
        <ul>
          <li>
            <img
              className='shipment-single-icon'
              src={palletJack}
              alt='Pallet Jack'
            />
            Pallet Jack
          </li>
          <li>
            <img className='shipment-single-icon' src={airport} alt='Airport' />
            Airport
          </li>
        </ul>
      </div>
      <div className='shipment-single-content shipment-single-delivery'>
        <p>Delivery</p>
        <ul>
          <li>
            <img className='shipment-single-icon' src={lumper} alt='Lumper' />
            Pallet Jack
          </li>
          <li>
            <img
              className='shipment-single-icon'
              src={liftGate}
              alt='Lift Gate'
            />
            Airport
          </li>
        </ul>
      </div>
      <div className='shipment-single-content shipment-single-specs'>
        <div>
          <p>
            <img className='shipment-single-icon' src={dryVan} alt='Dry Van' />
            dry van 53
          </p>
        </div>
        <div>
          <p>COMMODITY</p>
          <p>Apples</p>
        </div>
        <div>
          <p>WEIGHT</p>
          <p>55,000 lb</p>
        </div>
        <div>
          <p>SHIPPER RATING</p>
          <p>stars</p>
        </div>
      </div>
    </div>
  )
}

export default ShipmentSingle
