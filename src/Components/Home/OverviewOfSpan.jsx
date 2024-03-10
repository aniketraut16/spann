import React, { useEffect, useRef, useState } from "react";
import img from "../Images/oveview.png";

function OverviewOfSpan() {
  const [isVisible, setIsVisible] = useState(false);
  const [animationcount, setanimationcount] = useState(0);

  const overviewRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      setIsVisible(entries[0].isIntersecting);
    }, options);

    if (overviewRef.current && imgRef.current) {
      observer.observe(overviewRef.current);
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (animationcount < 2) {
      const overviewElement = overviewRef.current;
      const imgElement = imgRef.current;

      if (isVisible) {
        overviewElement.style.transform = "translateX(0px)";
        imgElement.style.transform = "translateX(0px)";
      } else {
        overviewElement.style.transform = "translateX(-5em)";
        imgElement.style.transform = "translateX(5em)";
      }
      setanimationcount(animationcount + 1);
    }
  }, [isVisible]);
  return (
    <div id="overviewOfSpan">
      <div ref={overviewRef}>
        <h1> OVERVIEW OF SPAN CONSULTING</h1>
        <p>
          SPAN Consulting is a leading provider of professional services,
          offering specialized brand protection, legal, investigative, business
          risk advisory, and strategic consulting services to our valued clients
          across South Asia and Southeast Asia. With offices in Singapore,
          India, and Bangladesh, we have established ourselves as a trusted
          partner in the region.
        </p>
        <p>
          We boast extensive experience and take great pride in delivering a
          comprehensive range of services, encompassing intellectual property
          (IP) matters such as trademarks, copyrights, patents, and designs, as
          well as confidential information, trade secrets, healthcare regulatory
          laws, media, entertainment, sports laws, and digital and IT laws. Our
          offerings include:
        </p>
        <p> 1.IP registration and prosecution</p>
        <p> 2.Audits</p>
        <p>
          {" "}
          3.Product security investigations and enforcement (PSI&E) through
          civil, criminal, and administrative measures, leveraging law
          enforcement and regulatory agencies
        </p>
        <p> 4.Litigation</p>
        <p>
          {" "}
          5.Legal and business risk consulting, including assessments and the
          development of risk mitigation plans
        </p>
        <p> 6.Customs recordation of intellectual property rights (IPR)</p>
        <p>
          {" "}
          7.Training programs for law enforcement agencies (LEA), customs,
          external and internal stakeholders
        </p>
        <p>
          {" "}
          8.Supply chain security and integrity programs, risk assessments, and
          investigations
        </p>
        <p> 9.Market research, both primary and secondary</p>
        <p>
          Driven by technology, we have developed a suite of proprietary tools,
          toolkits, and modules in-house, tailored to address various needs such
          as brand protection, case management, budget management, and ROI
          calculation. Our Brand Protection: Total Legal & Business Solutions
          (TLBS) practice is meticulously crafted to address concerns regarding
          counterfeiting, product diversion, product tampering, and IPR
          infringement. These solutions are designed and executed to fulfill our
          clients' primary objectives of ensuring patient/consumer safety,
          safeguarding reputation and trust, and enhancing revenue streams.
        </p>
      </div>
      <img src={img} alt="" ref={imgRef} />
    </div>
  );
}

export default OverviewOfSpan;
