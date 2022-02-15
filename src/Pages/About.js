import React from 'react'
import AboutContent from '../Components/AboutContent/AboutContent'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import Counter from '../Components/Counter/Counter'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import WhoWeAre from '../Components/Who We Are/WhoWeAre'

const About = () => {
  return (
    <div>
      <Navbar/>
      <BreadCrumbs aboutus = {"About Us"}/>
      <WhoWeAre/>
      <AboutContent/>
      <Counter/>
      <Footer/>
    </div>
  )
}

export default About