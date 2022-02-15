import React , {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Blogs from "./Pages/Blogs";
import OurFleet from "./Pages/OurFleet";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import './App.css';
import BookNow from "./Pages/BookNow";
import ServicesPage from "./Pages/ServicesPage";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/about" exact  element={<About/>} />
        <Route path="/contact-us" exact  element={<ContactUs/>} />
        {/* <Route path="/blogs" exact  element={<Blogs/>} /> */}
        <Route path="/our-fleet" exact  element={<OurFleet/>} />
        <Route path="/booknow" exact  element={<BookNow/>} />
        <Route path="/services" exact  element={<ServicesPage/>} />
      </Routes>
    </> 
  );
};
export default App;
