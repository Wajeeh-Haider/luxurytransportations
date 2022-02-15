import React from 'react';
import './OurValues.css';

const OurValues = () => {
  return <div>
      <section id="values" className="values">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          {/* <h2>Our Values</h2> */}
          <p>Our Values</p>
        </header>
        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img src="assets/img/values-1.png" className="img-fluid" alt=""/>
              <h3>Our Mission</h3>
              <p className='text-left'>To Deliver Clean Vehicles on Time and To Earn The Total Trust and Loyalty of Every Customer by Providing The Best Customer Service at The Most Competitive Rates Through Employee Motivation and Technology. A Value-Driven Customer Experience That Defines The Character of This Company Through Our Friendly Employees, Sensational Value, and Excellent Experience. Our Aim is to Serve Our Customers with Potential and Efficient Service.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
            <div className="box">
              <img src="assets/img/values-2.png" className="img-fluid" alt=""/>
              <h3>Our Guarantee</h3>
              <p>We Guarantee The Best Services, and The Lowest Rates Among All Major Competitors. If You Find Other Company’s Rates to be Lower Than Paramount’s at Any of Our Locations, We Will Honor That Rate. Get The Same Rental With Great Service at The Lowest Rate. If You Find a Lower Rate, Please E-Mail The Information to a Customer Service Representative Within 2 Hours of Your Findings. Our Guarantee Only Applies to Our Competitors That are Legally Licensed.</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
            <div className="box">
              <img src="assets/img/values-3.png" className="img-fluid" alt=""/>
              <h3>Excellence in Experience.</h3>
              <p>At Luxury Transportations, we work hard to provide you with safe, elegant and efficient transportation that you can trust. We value your time and strive to ensure only the utmost professionalism and quality in our service. Our friendly staff will work hard to help you make any occasion unforgettable with our luxury travel options. Whether you’re going to a wedding or picking someone up from the airport, our drivers are ready to provide you with an experience that you’ll remember forever.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  </div>;
};

export default OurValues;
