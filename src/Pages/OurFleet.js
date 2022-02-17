import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import FleetCard from '../Components/FleetCard/FleetCard'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const OurFleet = () => {
  document.title = 'Fleet-Luxury Transportations';
  return (
    <div>
        <Navbar/>   
        <BreadCrumbs OurFleet = {'Our Fleet'}/>
        <FleetCard/>
        <Footer/>   
    </div>
  )
}

export default OurFleet