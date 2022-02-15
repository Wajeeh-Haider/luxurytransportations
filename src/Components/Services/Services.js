import React from "react";
// import {Link} from 'react-router-dom'
// import './Services.css';
import ServiceData from './ServiceData';
const Services = () => {
  return (
    <div>

      {/* <section id="services" className="services">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>Services</h2>
            <p>Veritatis et dolores facere numquam et praesentium</p>
          </header>
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6" 
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-box blue">
                <i className="ri-discuss-line icon"></i>
                <h3>Nesciunt Mete</h3>
                <p>
                  Provident nihil minus qui consequatur non omnis maiores. Eos
                  accusantium minus dolores iure perferendis tempore et
                  consequatur.
                </p>
                <Link to="/" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-box orange">
                <i className="ri-discuss-line icon"></i>
                <h3>Eosle Commodi</h3>
                <p>
                  Ut autem aut autem non a. Sint sint sit facilis nam iusto
                  sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
                <Link to="/" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-box green">
                <i className="ri-discuss-line icon"></i>
                <h3>Ledo Markt</h3>
                <p>
                  Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                  Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
                <Link to="/" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-box red">
                <i className="ri-discuss-line icon"></i>
                <h3>Asperiores Commodi</h3>
                <p>
                  Non et temporibus minus omnis sed dolor esse consequatur.
                  Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <Link to="/" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-box purple">
                <i className="ri-discuss-line icon"></i>
                <h3>Velit Doloremque.</h3>
                <p>
                  Cumque et suscipit saepe. Est maiores autem enim facilis ut
                  aut ipsam corporis aut. Sed animi at autem alias eius labore.
                </p>
                <Link to="/" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-box pink">
                <i className="ri-discuss-line icon"></i>
                <h3>Dolori Architecto</h3>
                <p>
                  Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                  neque non et debitis iure. Corrupti recusandae ducimus enim.
                </p>
                <Link to="/" className="read-more">
                  <span>Read More</span> <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 my-5">
            <h1
              className="h1 text-center"
              style={{ fontSize: "24px", fontWeight: "700", color: "#012970" }}
            >
              Let Us Take Care of All Your Needs!
            </h1>
            <p>For all your transportation needs, Big Limousine Service is your best choice. From airport trips, weddings, proms, or a night out on the town we provide the best service in the USA. Our mission is to serve you with safe, clean, and reliable transportation services. We provide luxury services for individuals, groups, and corporate transportation needs 24/7.</p>
          </div>

          <div className="row my-4">
          {ServiceData.map((elem)=>{
            const {id , title , description , imgSrc} = elem;
            return (
              <div className="col-md-4" key={id}>
                    <div className="card border-0 shadow-sm my-3">
                        <div className="card-body p-3">
                            <div className="card-img-top">
                                <img src={imgSrc} alt="" className="img-fluid" style={{borderRadius:'12px 0px 12px'}}/>
                            </div>
                            <div className="card-title my-3">
                            <h3>{title}</h3>
                              <p className="text-muted">{description}</p>
                            </div>
                        </div>
                    </div>
              </div>
            )
          })}
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default Services;
