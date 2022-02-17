import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs';
import Contact from '../Components/Contact/Contact';
const ContactUs = () => {
  document.title = 'Contact Us-Luxury Transportations';
  return (
    <>
        <Navbar/>
        <BreadCrumbs contactus={"Contact Us"}/> 
        <Contact />
        <Footer/>

    </>
  )
}

export default ContactUs