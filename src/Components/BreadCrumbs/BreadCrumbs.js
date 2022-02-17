import React from 'react';
import './Breadcrumbs.css';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({contactus , aboutus , blogs , OurFleet , BookNow , services , ThankYou}) => {
  return (
    <div>
        <section className="breadcrumbs">
      <div className="container">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li>{contactus} {aboutus} {blogs} {OurFleet} {BookNow} {services} {ThankYou} </li>
        </ol>
        <h2>{contactus} {aboutus} {blogs} {OurFleet} {BookNow} {services} {ThankYou} </h2>
      </div>
    </section>
    </div>
  )
}

export default BreadCrumbs