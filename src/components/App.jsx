import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './navigation/Navbar'
import Logistics from './shipments/Logistics'
import ShipmentSingle from './shipments/ShipmentSingle'

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
