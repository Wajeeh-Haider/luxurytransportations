import React from 'react';
import './Features.css';

const Features = () => {
  return <div>
      <section id="features" className="features">

<div className="container" data-aos="fade-up">

  <header className="section-header">
    <h2>Features</h2>
    <p>Luxury Transportations Features</p>
  </header>

  <div className="row">

    <div className="col-lg-6">
      <img src="assets/img/FeaturesImage.jpg" className="img-fluid" alt="altPictures"/>
    </div>

    <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
      <div className="row align-self-center gy-4">
        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
          <div className="feature-box d-flex align-items-center">
            <i className="bi bi-check"></i>
            <h3>Your security & comfort is our priority</h3>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="300">
          <div className="feature-box d-flex align-items-center">
            <i className="bi bi-check"></i>
            <h3>Will pick you up at any location</h3>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="200">
          <div className="feature-box d-flex align-items-center">
            <i className="bi bi-check"></i>
            <h3>Full bar, leather seating, tinted windows</h3>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="500">
          <div className="feature-box d-flex align-items-center">
            <i className="bi bi-check"></i>
            <h3>Only Late Model Fleet Limos, SUV’s, Party Limos, and Buses</h3>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="600">
          <div className="feature-box d-flex align-items-center">
            <i className="bi bi-check"></i>
            <h3>Multiple Stops Keep the party going</h3>
          </div>
        </div>

        <div className="col-md-6" data-aos="zoom-out" data-aos-delay="700">
          <div className="feature-box d-flex align-items-center">
            <i className="bi bi-check"></i>
            <h3> LCD TVs and fiber optic lighting</h3>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <div className="row feature-icons" data-aos="fade-up">
    <h3 className='mb-5'>Why Choose Us?</h3>

    <div className="row">
      <div className="col-xl-4 text-center" data-aos="fade-right" data-aos-delay="100">
        <img src="assets/img/WhyChooseUs.jpeg" className="img-fluid p-4" alt="altPictures"
        style={{borderRadius:'40px 0px 40px'}}

        />
      </div>
      <div className="col-lg-8 d-flex content">
        <div className="row align-self-center gy-4">
          <div className="col-md-6 icon-box" data-aos="fade-up">
            <i className="ri-line-chart-line"></i>
            <div>
              <h4>A Vast Fleet of Vehicles</h4>
              <p>As We Deal With an Extensive Range of Vehicles, You Can Choose To Drive Your Evening or Night Away in any High-end Car You’ve Been Dreaming of – From Sedans to Party Vehicles, We Can Take Care of All Your Demands!</p>
            </div>
          </div>
          <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
            <i className="ri-stack-line"></i>
            <div>
              <h4>Trained Professionals</h4>
              <p>At Luxury Transportations, You Will Deal With a Team That is Highly Professional, Proficient, and is Trained Well To Make You The Most Comfortable and Satisfied During All Our Dealings.</p>
            </div>
          </div>
          <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <i className="ri-magic-line"></i>
            <div>
              <h4>Online Booking</h4>
              <p>We are a 24/7 Convenient Luxury Transportations Provider Where You Can Book Any of Your Favorite Models From a Wide Range of Cars in the United State</p>
            </div>
          </div>
          <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
            <i className="ri-command-line"></i>
            <div>
              <h4>Online Payment</h4>
              <p>In Order To Secure Your Limo Rental Reservation With Big Limo, A 50% Deposit is Required. For Your Convenience, Our SSL Secure Payment Getaway System Accepts all Major Credit Cards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Feature Icons --> */}
</div>

</section>
  </div>;
};

export default Features;
