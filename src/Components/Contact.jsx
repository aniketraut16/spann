import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="Contact">
        <h1>Contact Us</h1>
        <div>
          <div className="adress">
            <h2>Get in Touch</h2>
            <h3>India</h3>
            <p>
              Office No. 516, Dwarka City Centre, Sector 12, Dwarka, New Delhi
              110075, INDIA
            </p>
            <span>+91-829-12345-03</span>
            <h3> India - 2</h3>
            <p>
              {" "}
              902, Embassy Centre, Jamnalal Bajaj Road, Nariman Point,Mumbai
              400021, INDIA{" "}
            </p>
            <p> +91-829-12345-02 </p>
            <h3> Singapore </h3>
            <p> 46 Kim Yam Road, #01-06 The Herencia, SINGAPORE - 239351 </p>
            <span> +65-98635879 </span>
            <h3> Bangladesh </h3>
            <p>
              DARUS SALAM ARCADE (3rd Floor) 14, Purana Paltan, Dhaka -1000,
              BANGLADESH
            </p>
            <span> +880 1894-697179</span>
          </div>
          <div className="form">
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">Conatact</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">Country</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">State</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">City</label>
              <input type="text" />
            </div>
            <div id="message">
              <label htmlFor="">Message</label>
              <textarea name="" cols="30" rows="10"></textarea>
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
