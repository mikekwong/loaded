import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Logistics from './Logistics'
import ShipmentSingle from './ShipmentSingle'
import Navbar from './Navbar'

const App = () => {
  return (
    <Router>
      <nav className='nav'>
        <Navbar />
      </nav>
      <div className='main'>
        <Logistics />
        <Route path='/shipment/:id' component={ShipmentSingle} />
      </div>
    </Router>
  )
}

export default App
