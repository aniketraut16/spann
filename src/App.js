import React from "react";
import LandingPage from "./Components/Home/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/style.css";
import "./Components/Services/Services.css";
import "./Components/AboutUs/Aboutus.css";
import "./Components/SPAN/Span.css";
import "./Components/TRANING/Traning.css";
import "./Components/Industries/Industries.css";
import "./Components/Resources/Resources.css";
import ServiceTemplate from "./Components/Services/ServiceTemplate";
import AboutUsTemplate from "./Components/AboutUs/AboutUsTemplate";
import Contact from "./Components/Contact";
import SpanSuit from "./Components/SPAN/SpanTemplate";
import TraningTemplate from "./Components/TRANING/Traning";
import Industries from "./Components/Industries/Industries";
import Resources from "./Components/Resources/Resources";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/spansuit" element={<SpanSuit />} />
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
    </Router>
  );
}

export default App;
