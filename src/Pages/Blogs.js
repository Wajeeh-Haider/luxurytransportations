import React from 'react'
import BlogsData from '../Components/Blogs/BlogsData'
import BreadCrumbs from '../Components/BreadCrumbs/BreadCrumbs'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const Blogs = () => {
  return (
    <div>
    <Navbar/>
    <BreadCrumbs blogs = {"Our Blogs"}/>
    <BlogsData/>
    <Footer/>
    </div>
  )
}

export default Blogs