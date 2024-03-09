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
        <div className="messagecontent">
          <div>
            <img
              src={d1}
              alt=""
              ref={(el) => {
                if (el) {
                  observedElements.current.push(el);
                }
              }}
              style={{ transition: "all 500ms ease" }}
            />
            <p
              ref={(el) => {
                if (el) {
                  observedElements.current.push(el);
                }
              }}
              style={{ transition: "all 500ms ease" }}
            >
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
          <div id="colVineetJaisawal">
            <p
              ref={(el) => {
                if (el) {
                  observedElements.current.push(el);
                }
              }}
              style={{ transition: "all 500ms ease" }}
            >
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
            <img
              src={d2}
              alt=""
              ref={(el) => {
                if (el) {
                  observedElements.current.push(el);
                }
              }}
              style={{ transition: "all 500ms ease" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
