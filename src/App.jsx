import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services'
import Contactus from './Pages/Contactus'
import Login from './Pages/Login'
import Register from './Pages/Register'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        </Routes>
    </div>
  )
}

export default App