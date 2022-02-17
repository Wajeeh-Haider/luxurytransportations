import React from "react";
import "./HeroSection.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore  ,{Autoplay} from 'swiper';
import 'swiper/css';

const HeroSection = () => {
  SwiperCore.use([Autoplay])
  const hero = {
    background: `url('assets/img/hero-bg.png') top center no-repeat`,
  };
  
  return (
    <div>
      <section
        id="hero"
        style={hero}
        className="hero d-flex align-items-center"
      >
        <div className="container">
          <div className="row " style={{display:'flex' , justifyContent:'center' }}>
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Welcome to Luxury Transportations.</h1>
              <h2 data-aos="fade-up" data-aos-delay="200">
                Enjoy the luxury of a lifetime in our brand New Range Of
                Limousines. With us, you don’t have to worry about safety at
                all! Our impeccable safety records ensure you enjoy the time of
                your life with the utmost protection.
              </h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <Link
                    to="our-fleet"
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>Our Fleet</span>
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
            <Swiper 
            loop={true}
            autoplay={{ delay: 1000,
              disableOnInteraction: false
             }}
            >
              <SwiperSlide>
              <img
                src={`assets/img/HeroImage2.jpg`}
                className="img-fluid"
                alt="heroSliderImage"
              />
              </SwiperSlide>
              <SwiperSlide>
              <img
                src={`assets/img/HeroImage4.jpg`}
                className="img-fluid"
                alt="heroSliderImage"
              />
              </SwiperSlide>
              <SwiperSlide>
              <img
                src={`assets/img/HeroImage6.jpg`}
                className="img-fluid"
                alt="heroSliderImage"
              />
              </SwiperSlide>
              <SwiperSlide>
              <img
                src={`assets/img/HeroImage7.jpg`}
                className="img-fluid"
                alt="heroSliderImage"
              />
              </SwiperSlide>
              <SwiperSlide>
              <img
                src={`assets/img/sprinter-van.jpg`}
                className="img-fluid"
                alt="heroSliderImage"
              />
              </SwiperSlide>
            </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
