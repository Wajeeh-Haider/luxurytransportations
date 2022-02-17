import React , {useState , useEffect} from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
} from "swiper";
import "swiper/css";
import TestimonialData from "./TestimonialData";

const Testimonials = () => {
  const [BreakPoint, setBreakPoint] = useState(3);
  const [screenSize, setscreenSize] = useState(null);
  useEffect(() => {
      const handleResize = () => setscreenSize(window.innerWidth);
      window.addEventListener('resize' , handleResize);
      handleResize();
      return () => window.removeEventListener('resize' , handleResize)
  }, []);

  useEffect(() => {   
    if(screenSize<=780){
      setBreakPoint(1)
    }
    else{
      setBreakPoint(3)

    }
  }, [screenSize]);

  SwiperCore.use([Autoplay]);

  return (
    <div>
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Testimonials</h2>
            <p>What they are saying about us</p>
          </header>
          <div
            className="testimonials-slider swiper swiper-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Swiper
              slidesPerView={BreakPoint}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              draggable={true}
            >
              <div className="swiper-wrapper">
                {TestimonialData.map((elem, i) => {
                  return (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="testimonial-item">
                        <div className="stars">
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                          <i className="bi bi-star-fill"></i>
                        </div>
                        <p>{elem.description}</p>
                        <div className="profile mt-auto">
                          <img
                            src="assets/img/user-line.svg"
                            className="testimonial-img"
                            alt="TestimonialsPhoto"
                          />
                          <h3>{elem.name}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </div>
            </Swiper>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
