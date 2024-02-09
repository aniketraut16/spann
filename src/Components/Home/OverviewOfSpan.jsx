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
          SPAN Consulting is a premier professional services firm providing
          specialist brand protection, legal, investigations, business risk
          advisory and strategic consulting services to our esteemed clients in
          pan South Asia and SEA, having offices in Singapore, India and
          Bangladesh.{" "}
        </p>
        <p>
          We are experienced and take pride in conducting and providing a
          complete range of services covering IP (Trademarks, Copyrights,
          Patents, and Designs), confidential information & trade secrets,
          healthcare regulatory laws, media, entertainment & sports laws, and
          digital & IT laws including but not limited to IP registration and
          prosecution, audits, product security investigations, and enforcement
          (PSI&E) of rights through civil, criminal, and administrative measures
          thru law enforcement and regulatory agencies litigation, comprehensive
          legal and business risk consulting, assessments and developing risk
          mitigation plans, customs recordation of IPR, and LEA, Customs,
          External and Internal stakeholder trainings, supply chain
          security/integrity programs, risk assessments and investigations,
          etc., market research (primary and secondary)
        </p>
        <p>
          We are highly technology driven and have developed several tools,
          toolkits, and modules in-house, be it for brand protection, case
          management, budget management, ROI Calculation, etc.,
        </p>
      </div>
      <img src={img} alt="" ref={imgRef} />
    </div>
  );
}

export default OverviewOfSpan;
