import React from 'react'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const ThankYou = () => {
  document.title = 'Thank You-Luxury Transportations';

  return (
    <div>
        <Navbar/>
        <BreadCrumbs ThankYou = {"Thank You"}/>
        <div className="container my-5">
            <div className="row d-flex justify-content-center">
            <div className="col-md-10">
                <div className="text-center h1">Thank You! We Will Reach You Out As Soon As Possible</div>
            </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default ThankYou