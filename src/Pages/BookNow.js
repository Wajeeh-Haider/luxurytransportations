import React from 'react'
import BookNowData from '../Components/BookNowData/BookNowData'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const BookNow = () => {
  return (
    <div>
        <Navbar/>

        <BreadCrumbs BookNow = {"Book Now"}/>
        <BookNowData/>
        <Footer/>
    </div>
  )
}

export default BookNow