import React , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const [Text, setText] = useState('');
  const [screenSize, setscreenSize] = useState(null);
  useEffect(() => {
      const handleResize = () => setscreenSize(window.innerWidth);
      window.addEventListener('resize' , handleResize);
      handleResize();
      return () => window.removeEventListener('resize' , handleResize)
  }, []);

  useEffect(() => {   
    if(screenSize<=435){
      setText('LT');
    }
    else{
      setText('Luxury Transporataions');
    }
  }, [screenSize]);
  return (
    <>
  <footer id="footer" className="footer">

<div className="footer-newsletter">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-12 text-center">
        <h4>Our Newsletter</h4>
        <p>Subscribe Our Newsletter To Get Latest News From Luxury Transportations </p>
      </div>
      <div className="col-lg-6">
        <form>
          <input type="email" name="email"/><input type="submit" value="Subscribe"/>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="footer-top">
  <div className="container">
    <div className="row gy-4 d-flex justify-content-center">
      <div className="col-lg-5 col-md-12 footer-info">
         <Link to="" href="index.html" className="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="altPictures"/>
          <span>{Text}</span>
        </Link>
        <p>Enjoy the luxury of a lifetime in our brand New Range Of Limousines. With us, you don’t have to worry about safety at all! Our impeccable safety records ensure you enjoy the time of your life with the utmost protection.</p>
        <div className="social-links mt-3">
           <Link to="" className="twitter"><i className="bi bi-twitter"></i></Link>
           <Link to="" className="facebook"><i className="bi bi-facebook"></i></Link>
           <Link to="" className="instagram"><i className="bi bi-instagram"></i></Link>
           <Link to="" className="linkedin"><i className="bi bi-linkedin"></i></Link>
        </div>
      </div>

      <div className="col-lg-2 col-6 footer-links">
        <h4>Links</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i>  <Link to="/"  >Home</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to="/about-us"  >About us</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to="/services"  >Services</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Terms of service</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Privacy policy</Link></li>
        </ul>
      </div>
      {/* <div className="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Web Design</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Web Development</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Product Management</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Marketing</Link></li>
          <li><i className="bi bi-chevron-right"></i>  <Link to=""  >Graphic Design</Link></li>
        </ul>
      </div> */}

      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>
          A108 Adam Street <br/>
          New York, NY 535022<br/>
          United States <br/><br/>
          <strong>Phone:</strong> (469) 900 1002<br/>
          <strong>Email:</strong> contact@luxurytransportations.com<br/>
        </p>

      </div>

    </div>
  </div>
</div>

<div className="container">
  <div className="copyright">
    &copy; Copyright <strong><span>Luxury Transportations</span></strong>. All Rights Reserved
  </div>
  {/* <div className="credits">
    Designed by  <Link to="" href="https://bootstrapmade.com/">BootstrapMade</Link>
  </div> */}
</div>
</footer>
    </>
  );
};

export default Footer;
