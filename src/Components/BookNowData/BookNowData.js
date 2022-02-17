import React , {useState} from "react";
import "./BookNow.css";
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com';
const BookNowData = () => {
  const [bookNowData, setBookNowData] = useState({
    fullname :'',
    email:'',
    typeofservice:'',
    typeofcar:'',
    pickupcity:'',
    destination:'',
    tripduration:'',
    passengers:'',
    zipcode:'',
    pickupdate:'',
    pickuptime:''
  });
  let name , value; 
  const getUserData = (event) =>{
  name= event.target.name;
  value= event.target.value;
  setBookNowData({...bookNowData , [name]:value })
}
const sendData = async (e) => {
      e.preventDefault();
      const {fullname ,email,typeofservice,typeofcar,pickupcity,destination,tripduration,passengers,zipcode,pickupdate,pickuptime} = bookNowData;
      if(fullname&&email&&typeofservice&&typeofcar&&pickupcity&&destination&&tripduration&&passengers&&zipcode&&pickupdate&&pickuptime){
        const res =  await  fetch('https://luxurytransportation-9cf2d-default-rtdb.firebaseio.com/luxuryTransporatation.json', {
        method :'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body : JSON.stringify({
          fullname ,
          email,
          typeofservice,
          typeofcar,
          pickupcity,
          destination,
          tripduration,
          passengers,
          zipcode,
          pickupdate,
          pickuptime
        })
      });
      if(res){
        setBookNowData({
          fullname :'',
          email:'',
          typeofservice:'',
          typeofcar:'',
          pickupcity:'',
          destination:'',
          tripduration:'',
          passengers:'',
          zipcode:'',
          pickupdate:'',
          pickuptime:''
        });
        Swal.fire({
          title: 'Success',
          text: 'We will reach you out as soon as possible.',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        
      }
      }else{
        Swal.fire({
          title: '',
          text: 'Please Fill Out All The Fields',
          icon: 'error',
          confirmButtonText: 'Okay'
        })
      }
}
const email = (e) => {
  emailjs.sendForm('gmail', 'template_taz13bo', e.current, 
  'user_o8ujjUIZyp2XNNdI2wigk')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
}
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
              <form className="php-email-form" onSubmit={email}>
                <div className="row gy-4">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      placeholder="Full Name"
                      required
                      value={bookNowData.fullname}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-12 ">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                      value={bookNowData.email}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-6 ">
                    <select
                      className="form-control"
                      required
                      name="typeofservice"
                      value={bookNowData.typeofservice}
                      onChange={getUserData}
                    >
                      <option  >Type Of Service</option>
                      <option defaultValue="Air Transportation">Air Transportation</option>
                      <option defaultValue="Night Out">Night Out</option>
                      <option defaultValue="Wedding">Wedding</option>
                      <option defaultValue="Wine Tours">Wine Tours</option>
                      <option defaultValue="Birthday">Birthday</option>
                      <option defaultValue="Anniversary">Anniversary</option>
                      <option defaultValue="Concerts">Concerts</option>
                    </select>
                  </div>
                  <div className="col-md-6 ">
                    <select
                      className="form-control"
                      required
                      name="typeofcar"
                      value={bookNowData.typeofcar}
                      onChange={getUserData}
                    >
                      <option >Vehicle Type</option>
                      <option defaultValue="Sedan">Sedan</option>
                      <option defaultValue="SUV">SUV</option>
                      <option defaultValue="Van">Van</option>
                      <option defaultValue="Limousine">Limousine</option>
                      <option defaultValue="SUV Limousine">SUV Limousine</option>
                      <option defaultValue="Mercedes Sprinter">Mercedes Sprinter</option>
                      <option defaultValue="Party Bus">Party Bus</option>
                    </select>
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Pickup City"
                      required
                      name="pickupcity"
                      value={bookNowData.pickupcity}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Destination"
                      required
                      name="destination"
                      value={bookNowData.destination}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-6 ">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Trip Duration"
                      required
                      name="tripduration"
                      value={bookNowData.tripduration}
                      onChange={getUserData}

                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Passengers"
                      required
                      name='passengers'
                      value={bookNowData.passengers}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Pickup Zip Code"
                      required
                      name='zipcode'
                      value={bookNowData.zipcode}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Pickup Date"
                      required
                      onFocus={(e) => (e.currentTarget.type = "date")}
                      name='pickupdate'
                      value={bookNowData.pickupdate}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Pickup Time"
                      required
                      onFocus={(e) => (e.currentTarget.type = "time")}
                      name='pickuptime'
                      value={bookNowData.pickuptime}
                      onChange={getUserData}
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="button" onClick={sendData}>
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

}
export default BookNowData;
