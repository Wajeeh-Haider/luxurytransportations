import React from 'react';
import {Link} from 'react-router-dom';
import './WhoWeAre.css';

const WhoWeAre = () => {
  return <div>
      <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">

          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div className="content">
              <h3>Who We Are</h3>
              <h2>We are here to make your life easier and provide you Comfort at your doorstep</h2>
              <p>
              Luxury Transportations thrives on the comfort and satisfaction of its customers. We ensure that you have the trip of a lifetime through our impeccable Limousine rental service. Moreover, if you’re looking for something else other than a limo, we can take care of that as well. You can book any of the luxury cars from the vast range that we offer, and reach a wedding, party, or your prom in celebrity style! You can contact us through a phone call, our email, or the live chat on our website.​
              </p>
              <div className="text-center text-lg-start">
                 <Link to="/booknow" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Book Now</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
          </div>

        </div>
      </div>

    </section>
  </div>;
};

export default WhoWeAre;
