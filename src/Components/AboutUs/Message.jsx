import React, { useEffect, useRef } from "react";
import d1 from "../Images/director1.png";
import d2 from "../Images/director2.png";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Message() {
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5, // Intersection ratio at which the observer callback will be executed
    };

    const img1Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img1Ref.current.style.transition = "transform 1s ease";
          img1Ref.current.style.transform = "translateX(0)";
        } else {
          img1Ref.current.style.transition = "transform 0s";
          img1Ref.current.style.transform = "translateX(-8em)";
        }
      });
    }, options);

    const img2Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img2Ref.current.style.transition = "transform 1s ease";
          img2Ref.current.style.transform = "translateX(0)";
        } else {
          img2Ref.current.style.transition = "transform 0s";
          img2Ref.current.style.transform = "translateX(8em)";
        }
      });
    }, options);

    const para1Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          para1Ref.current.style.transition = "transform 1s ease";
          para1Ref.current.style.transform = "translateX(0)";
        } else {
          para1Ref.current.style.transition = "transform 0s";
          para1Ref.current.style.transform = "translateX(8em)";
        }
      });
    }, options);

    const para2Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          para2Ref.current.style.transition = "transform 1s ease";
          para2Ref.current.style.transform = "translateX(0)";
        } else {
          para2Ref.current.style.transition = "transform 0s";
          para2Ref.current.style.transform = "translateX(-8em)";
        }
      });
    }, options);

    img1Observer.observe(img1Ref.current);
    img2Observer.observe(img2Ref.current);
    para1Observer.observe(para1Ref.current);
    para2Observer.observe(para2Ref.current);

    return () => {
      img1Observer.disconnect();
      img2Observer.disconnect();
      para1Observer.disconnect();
      para2Observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="Message">
        <div className="message-breadcrumb">
          <h2>{"ABOUTUS > DIRECTORS MESSAGE"}</h2>
          <h1>{"DIRECTORS MESSAGE"}</h1>
        </div>
        <div className="messagecontent">
          <div
            ref={img1Ref}
            style={{
              transition: "transform 1s ease",
              transform: "translateX(-2em)",
            }}
          >
            <img src={d1} alt="" />
            <p ref={para1Ref}>
              <h2>PANKAJ MONGA</h2>
              Pankaj is an accomplished Lawyer and an Advocate of the Supreme
              Court of India with over 24+ years of experience and an impressive
              track record in the Pharma and healthcare industry. He has
              successfully led strategic legal and brand protection functions
              for renowned multinational organisations such as Johnson & Johnson
              and GlaxoSmithKline pan Asia Pacific and, through his
              collaborative work with clients, has always ensured the highest
              standards of patient/consumer safety, trust, and business value by
              effectively mitigating risks. He has a BA from Andhra University,
              an LLB from Delhi University and an Executive MBA from IIM
              Calcutta.
            </p>
          </div>
          <div
            ref={img2Ref}
            style={{
              transition: "transform 1s ease",
              transform: "translateX(2em)",
            }}
          >
            <p ref={para2Ref}>
              <h2>COL VINEET JAISWAL </h2>
              Colonel Vineet Jaiswal is an experienced Indian Army officer with
              over 23 years of service and a career filled with challenging
              roles. He has served in difficult areas both in India and abroad
              under the UN Peacekeeping Force. With an exemplary career in
              leadership and operations, the officer is now focused in his
              second innings towards risk assessment, management and mitigation.
              With his academic bent of mind, he heads the corporate training
              vertical of the company utilising his vast experience in training
              a professional army towards this. He has an MBA degree from
              SPJIMR, Mumbai and a Master's degree in Strategic Studies from the
              University of Madras, besides having certified himself in Global
              Supply Chain Management from the IIFT, New Delhi.
            </p>
            <img src={d2} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Message;
