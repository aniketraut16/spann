import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CookiePolicy from "./Components/CokieePolicy";
import LandingPage from "./Components/Home/LandingPage";
import Contact from "./Components/Contact";
import Enquiry from "./Components/Enquiry";
import "./Components/style.css";
import "./Components/phone-style.css";
import Disclamer from "./Components/Disclamer";
import ServiceTemplate from "./Components/Templates/ServiceTemplate";
import AboutUsTemplate from "./Components/Templates/AboutUsTemplate";
import SpanSuit from "./Components/Templates/SpanTemplate";
import Industries from "./Components/Templates/Industries";
import Resources from "./Components/Templates/Resources";
import TraningTemplate from "./Components/Templates/Traning";
import Message from "./Components/Message";
import MobileNavbar from "./Components/MobileNavbar";
import Partnership from "./Components/Partnership";

function App() {
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  useEffect(() => {
    if (showDisclaimer) {
      // If the disclaimer is shown, set a timeout to hide it after 5 seconds
      const disclaimerTimeout = setTimeout(() => {
        setShowDisclaimer(false);
        setShowCookiePolicy(true);
      }, 5000);

      // Clear timeout if component unmounts
      return () => clearTimeout(disclaimerTimeout);
    }
  }, [showDisclaimer]);

  const acceptDisclaimer = () => {
    setShowDisclaimer(false);
    setShowCookiePolicy(true);
  };

  const acceptCookiePolicy = () => {
    // Set the flag in local storage to indicate that the user has accepted the cookie policy
    localStorage.setItem("cookiePolicyAccepted", "true");
    setShowCookiePolicy(false);
  };

  return (
    <Router>
      <Disclamer />
      {showCookiePolicy && <CookiePolicy onAccept={acceptCookiePolicy} />}
      <Navbar />
      <MobileNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/about/directorsmessage" element={<Message />} />
        <Route path="/spansuit/:section" element={<SpanSuit />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/inquiry" element={<Enquiry />} />
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
