import React from 'react'
import ShipmentFromTo from './ShipmentFromTo'
import { addCommas } from '../utils'

import palletJack from '../icons/icon_accessorial_pallet_jack.svg'
import airport from '../icons/icon_accessorial_airport.svg'
import lumper from '../icons/icon_accessorial_lumper.svg'
import liftGate from '../icons/icon_accessorial_lift_gate.svg'
import dryVan from '../icons/icon_truck_dryvan.svg'

const ShipmentSingle = ({
  id,
  shipperRatingScore,
  commodity,
  stops,
  weight,
  equipmentType,
  equipmentSize,
  map
}) => {
  return (
    <div
      // onClick={props.shipmentDetail(id)}
      className='shipment-single-container'
    >
      <div className='shipment-single-section shipment-single-cities'>
        <p>
          {stops[0].city}, {stops[0].state}
          <span>></span>
          {stops[1].city}, {stops[1].state}
        </p>
      </div>
      <div className='shipment-single-section shipment-single-routes'>
        <ShipmentFromTo
          number={'1'}
          type={'Pick-Up'}
          pickupDelivery={stops[0]}
          icon1={palletJack}
          icon2={airport}
          icon1Name={'Pallet Jack'}
          icon2Name={'Airport'}
        />
        <ShipmentFromTo
          number={'2'}
          type={'Delivery'}
          pickupDelivery={stops[1]}
          icon1={lumper}
          icon2={liftGate}
          icon1Name={'Lumper'}
          icon2Name={'Lift Gate'}
        />
        <div className='shipment-single-section shipment-single-map'>
          <img className='shipment-single-map-image' alt='map' src={map} />
        </div>
      </div>
      <div className='shipment-single-section shipment-single-specs'>
        <div>
          <p>
            <img className='shipment-single-icon' src={dryVan} alt='Dry Van' />
            {equipmentType === 'DRV' ? 'Dry Van' : equipmentType}{' '}
            {equipmentSize}"
          </p>
        </div>
        <div>
          <p>COMMODITY</p>
          <p>{commodity}</p>
        </div>
        <div>
          <p>WEIGHT</p>
          <p>{addCommas(weight)} lb</p>
        </div>
        <div>
          <p>SHIPPER RATING</p>
          <p>{shipperRatingScore}</p>
        </div>
      </div>
    </div>
  )
}

export default ShipmentSingle
