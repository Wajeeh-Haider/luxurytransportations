import React from "react";
import "./BookNow.css";
const BookNowData = () => {
  return (
    <>
      <section id="" className="booknow">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Book Now</h2>
            <p>The Perfect Event Needs The Perfect Ride. <span style={{fontSize:'3rem'}}>L</span>uxury <span style={{fontSize:'3rem'}}>T</span>ransportations is Ready When
              You Are! </p>
          </header>
          <div className="row gy-4 d-flex justify-content-center">

            <div className="col-lg-6">
              <form action="" method="" className="php-email-form">
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="number"
                      className="form-control"
                      name="email"
                      placeholder="Trip Duration"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      name="subject"
                      placeholder="Passengers"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      name="subject"
                      placeholder="Pickup Code"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="date"
                      className="form-control"
                      name="subject"
                      placeholder="Pickup Date"
                      required
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="button">
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookNowData;
