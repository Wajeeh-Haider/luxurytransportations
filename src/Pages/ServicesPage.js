import React from "react";
import BreadCrumbs from "../Components/BreadCrumbs/BreadCrumbs";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Services from "../Components/Services/Services";

const ServicesPage = () => {
  document.title = 'Services-Luxury Transportations';

  return (
    <div>
      <Navbar />
      <BreadCrumbs services={"Our Services"} />

      <Services/>

      <Footer />
    </div>
  );
};

export default ServicesPage;
