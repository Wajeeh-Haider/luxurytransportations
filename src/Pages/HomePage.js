import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/Hero Section/HeroSection';
import Footer from '../Components/Footer/Footer';
import WhoWeAre from '../Components/Who We Are/WhoWeAre';
import OurValues from '../Components/Our Values/OurValues';
import Counter from '../Components/Counter/Counter';
import Features from '../Components/Features/Features';
import Services from '../Components/Services/Services';
import BlogPosts from '../Components/BlogsPosts/BlogPosts';
import FAQ from '../Components/FAQ/FAQ';
import Testimonials from '../Components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    {/* <WhoWeAre/> */}
    <OurValues/>
    <Counter/>
    <Features/>
    {/* <Services/> */}
    <BlogPosts/>
    <Testimonials/>
    {/* <FAQ/> */}
    <Footer/>
  </>
  )

};

export default HomePage;



