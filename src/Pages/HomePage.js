import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/Hero Section/HeroSection';
import Footer from '../Components/Footer/Footer';
import OurValues from '../Components/Our Values/OurValues';
import Counter from '../Components/Counter/Counter';
import Features from '../Components/Features/Features';
// import FAQ from '../Components/FAQ/FAQ';
import Testimonials from '../Components/Testimonials/Testimonials';

const HomePage = () => {
  document.title = 'Luxury Transportations';

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <OurValues/>
    <Counter/>
    <Features/>
    <Testimonials/>
    <Footer/>
  </>
  )

};

export default HomePage;



