import React from 'react'

const Section = props => {
  return (
    <div className='section'>
      <div className='section-content section-routes'>
        <h4 />
      </div>
      <div className='section-content section-pickup'>
        <p>Pick-Up</p>
        <p>Time Stamp</p>
      </div>
      <div className='section-content section-delivery'>
        <h4>Delivery</h4>
        <h4>Location</h4>
        <p>Timestamp</p>
      </div>
      <div className='section-content section-specs'>
        <div>
          <p>dry van 53</p>
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

export default Section
