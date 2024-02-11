import React, { useEffect, useRef } from "react";
import span from "../Images/span.jpeg";
import OurIntroduction from "./OurIntroduction";
import bg from "../Images/landingpgbackground.mp4";
import OverviewOfSpan from "./OverviewOfSpan";
import IiliteTrade from "./IiliteTrade";
import HighlightOfService from "./HighlightOfService";

function LandingPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.error("Autoplay error:", error);
      });
    }
    return () => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
  }, []);

  return (
    <>
      <div id="Landing-Page">
        <video id="background-video" loop muted autoPlay playsInline>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div id="landing-text">
          <h1>
            {" "}
            <span>S</span>TRATEGIC <span>P</span>ARTNER FOR <span>A</span>
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
      <i className="fa-brands fa-whatsapp"></i>
    </>
  );
}

export default LandingPage;
