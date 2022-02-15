import React from 'react';
import './Breadcrumbs.css';
import { Link } from 'react-router-dom';

const BreadCrumbs = ({contactus , aboutus , blogs , OurFleet , BookNow , services}) => {
  return (
    <div>
        <section className="breadcrumbs">
      <div className="container">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li>{contactus} {aboutus} {blogs} {OurFleet} {BookNow} {services} </li>
        </ol>
        <h2>{contactus} {aboutus} {blogs} {OurFleet} {BookNow} {services} </h2>
      </div>
    </section>
    </div>
  )
}

export default BreadCrumbs