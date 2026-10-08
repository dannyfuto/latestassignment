import React from 'react'
import Header from '../component/Header/Header'
import Hero from '../component/Hero/Hero'
import Course  from '../component/Course/Course'
import Campus from '../component/Campus/Campus'
import Facilities from '../component/Facilities/Facilities'
import Testiomnials from '../component/Testiomnials/Testiomnials'
import Cta from '../component/Cta/Cta'
import Footer from '../component/Footer/Footer'

const LandingPage = () => {
  return (
    <div>
        <Header/>
        <Hero/>
      <Course/>
      <Campus/>
      <Facilities/>
      <Testiomnials/>
      <Cta/>
      <Footer/>

    </div>
  )
}

export default LandingPage