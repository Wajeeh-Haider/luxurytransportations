import React from 'react';
import './Counter.css';

const Counter = () => {
  return <div>
 <section id="counts" className="counts">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter">100+</span>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-journal-richtext" style={{color: '#ee6c20'}}></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                <p>Projects</p>
              </div>  
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-headset" style={{color: "#15be56"}}></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter">24/7</span>
                <p>Hours Of Support</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-people" style={{color: "#bb0852"}}></i>
              <div>
                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>;
};

export default Counter;
