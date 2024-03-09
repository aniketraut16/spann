import React, { useEffect, useRef } from "react";

function Contact() {
  const observedElements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
          } else {
            entry.target.style.transform = "scale(0.95)";
          }
        });
      },
      { threshold: 0.1 }
    );

    observedElements.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <div className="Contact">
        <h1 ref={(el) => observedElements.current.push(el)}>CONTACT US</h1>
        <div>
          <div
            className="adress"
            ref={(el) => observedElements.current.push(el)}
          >
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
          <div className="form" ref={(el) => observedElements.current.push(el)}>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div>
              <label htmlFor="">Contact</label>
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
        <h1 ref={(el) => observedElements.current.push(el)}>Here we are:</h1>
        <div className="map" ref={(el) => observedElements.current.push(el)}>
          <iframe
            title="ouraddress"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7006.7761096230115!2d77.04062159565707!3d28.588133123578896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b55fbe6ee21%3A0x7c08ef8aa9430a1a!2sSPAN%20Consulting!5e0!3m2!1sen!2sin!4v1707122798541!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
