import React, { useEffect, useRef } from "react";
import d1 from "./Images/director1.png";
import d2 from "./Images/director2.png";

function Message() {
  const observedElements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "1";
          } else {
            entry.target.style.transform = "scale(0.95)";
            entry.target.style.opacity = "0";
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
      <div className="Message">
        <div className="templatebrd">
          <h2>{"ABOUTUS > DIRECTORS MESSAGE"}</h2>
          <h1>{"DIRECTORS MESSAGE"}</h1>
        </div>
      </div>
      <div id="DirectorsMessage">
        <div className="onedirector">
          <img src={d1} alt="" />
          <div className="drinfo">
            <span>
              <h1>Pankaj Monga</h1>
              <p>Founder & Director | SPAN CONSULTING</p>
            </span>
            <bold>Dear Esteemed Visitors,</bold>

            <p>
              Welcome to our firm's digital gateway. As the Founder and
              Director, I am deeply honoured to share with you the essence of
              our commitment and purpose. My journey in the legal and brand
              protection sector spans over 25 years, enriched by pivotal
              experiences with leading organizations such as GlaxoSmithKline
              Pte. Ltd. and J&J. These experiences have deeply ingrained in me
              the importance of protecting not just tangible assets but the
              well-being of individuals at large.
            </p>
            <p>
              Motivated by a relentless passion for consumer and patient safety,
              I was driven to establish our firm with a clear mission: to secure
              our clients' assets with unwavering integrity and dedication. We
              are specialists in addressing threats like Anti-Counterfeiting,
              Diversion, Product Tampering, and Intellectual Property
              Infringement. Our team, comprised of seasoned professionals, is
              dedicated to delivering service excellence, ensuring that we meet
              the specific needs of our clients with precision and care.
            </p>
            <p>
              The foundation of our firm is built on core values of honesty,
              humility, accountability, and nimble wit. These values guide our
              operations, ensuring we serve with the highest degree of
              integrity, transparency, and professionalism. Our ability to
              swiftly adapt to the dynamic market landscape allows us to offer
              tailored solutions that effectively address our clients’ unique
              challenges.
            </p>
            <p>
              I warmly invite you to explore our website further to learn about
              our comprehensive services, our foundational values, and our
              dedication to excellence. Whether you seek to protect your brand,
              mitigate risks, or achieve strategic objectives, we are here to
              partner with you, every step of the way.
            </p>
            <p>
              Thank you for considering our firm for your brand protection
              needs. Together, we can safeguard your assets and ensure a secure
              and prosperous future.
            </p>
            <p>Warm regards,</p>
            <p>Pankaj Monga Founder & Director</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
