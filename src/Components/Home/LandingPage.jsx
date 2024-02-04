import React, { useEffect, useRef } from "react";
import span from "../Images/span.jpeg";
import OurIntroduction from "./OurIntroduction";
import bg from "../Images/landingpgbackground.mp4";
import Navbar from "../Navbar";
import OverviewOfSpan from "./OverviewOfSpan";
import IiliteTrade from "./IiliteTrade";
import HighlightOfService from "./HighlightOfService";
import Footer from "../Footer";

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
        <Navbar />
        <div id="landing-text">
          <h1>
            {" "}
            <span>S</span>trategic <span>P</span>artner for <span>A</span>
            dvanced <span>N</span>avigation
          </h1>
        </div>
      </div>
      <div id="wecare">
        <img src={span} alt="" />
        <p>
          Reliance Industries Limited is a Fortune 500® company and the largest
          private sector corporation in India.
        </p>
      </div>
      <OurIntroduction />
      <OverviewOfSpan />
      <IiliteTrade />
      <HighlightOfService />
      <Footer />
    </>
  );
}

export default LandingPage;