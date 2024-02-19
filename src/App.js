import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CookiePolicy from "./Components/CokieePolicy";
import LandingPage from "./Components/Home/LandingPage";
import Contact from "./Components/Contact";
import "./Components/style.css";
import "./Components/phone-style.css";

import ServiceTemplate from "./Components/Templates/ServiceTemplate";
import AboutUsTemplate from "./Components/Templates/AboutUsTemplate";
import SpanSuit from "./Components/Templates/SpanTemplate";
import Industries from "./Components/Templates/Industries";
import Resources from "./Components/Templates/Resources";
import TraningTemplate from "./Components/Templates/Traning";

import Message from "./Components/Message";
import MobileNavbar from "./Components/MobileNavbar";

function App() {
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  useEffect(() => {
    const hasAcceptedCookiePolicy = localStorage.getItem(
      "cookiePolicyAccepted"
    );

    // If the user has not accepted the cookie policy yet, show the popup
    if (!hasAcceptedCookiePolicy) {
      const timeoutId = setTimeout(() => {
        setShowCookiePolicy(true);
      }, 4000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, []);

  const acceptCookiePolicy = () => {
    // Set the flag in local storage to indicate that the user has accepted the cookie policy
    localStorage.setItem("cookiePolicyAccepted", "true");
    setShowCookiePolicy(false);
  };

  return (
    <Router>
      {showCookiePolicy && <CookiePolicy onAccept={acceptCookiePolicy} />}
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about/directorsmessage" element={<Message />} />
        <Route path="/spansuit/:section" element={<SpanSuit />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/aboutus/:section" element={<AboutUsTemplate />} />
        <Route path="/traning/:section" element={<TraningTemplate />} />
        <Route path="/resources/:section" element={<Resources />} />
        <Route path="/industries/:section" element={<Industries />} />
        <Route
          path="/services/:section/:subsection"
          element={<ServiceTemplate />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
