import React, { useEffect, useRef, useState } from "react";
import span from "../Images/span.png";
import LandingBg1 from "../Images/landingpagebg1.jpg";
import LandingBg2 from "../Images/landingpagebg2.jpg";
import OurIntroduction from "./OurIntroduction";
import OverviewOfSpan from "./OverviewOfSpan";
import IiliteTrade from "./IiliteTrade";
import HighlightOfService from "./HighlightOfService";

function LandingPage() {
  const whatsAppLink = "https://wa.me/91xxxxxxxxxx?text= ";
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [bgImage, setBgImage] = useState(LandingBg1);

  useEffect(() => {
    const toggleInterval = setInterval(() => {
      setBgImage((prevBgImage) =>
        prevBgImage === LandingBg1 ? LandingBg2 : LandingBg1
      );
    }, 6000);

    return () => clearInterval(toggleInterval);
  }, []);
  return (
    <>
      <div
        id="Landing-Page"
        style={{
          background: `url(${bgImage}) center/cover`,
        }}
      >
        <div id="landing-text">
          <h1>
            <span>S</span>TRATEGIC <span>P</span>ARTNER
          </h1>
          <h1 id="landing-page-for">FOR</h1>
          <h1>
            <span>A</span>
            DVANCED <span>N</span>AVIGATION
          </h1>
        </div>
      </div>
      <div id="wecare">
        <img src={span} alt="" />
        <p>
          From meticulous audits to strategic tax planning and insightful
          consulting, we pave the way for your financial success with precision
          and expertise.
        </p>
      </div>
      <OurIntroduction />
      <OverviewOfSpan />
      <IiliteTrade />
      <HighlightOfService />
      <a href={whatsAppLink} id="whatsapp-logo" target="_blank">
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </>
  );
}

export default LandingPage;
