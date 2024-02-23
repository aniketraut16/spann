import React, { useEffect, useRef, useState } from "react";
import span from "../Images/span.png";
import LandingBg1 from "../Images/landingpagebg1.jpg";
import LandingBg2 from "../Images/landingpagebg2.jpg";
import LandingBg3 from "../Images/landingpagebg3.jpg";
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
    const images = [LandingBg1, LandingBg2, LandingBg3];
    let currentIndex = 0;

    const toggleInterval = setInterval(() => {
      setBgImage(images[currentIndex]);
      currentIndex = (currentIndex + 1) % images.length;
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
            <span>"SPAN"</span>
          </h1>
          <h1>
            <span>Y</span>OUR
            <span> S</span>TRATEGIC
          </h1>
          <h1>
            {" "}
            <span>P</span>ARTNER <span>F</span>OR
          </h1>
          <h1>
            <span>A</span>
            DVANCED <span>N</span>AVIGATION
          </h1>
        </div>
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
