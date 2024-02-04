import React from "react";
import LandingPage from "./Components/Home/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Components/style.css";
import "./Components/Services/Services.css";
import "./Components/AboutUs/Aboutus.css";
import "ultimate-react-multilevel-menu/dist/esm/index.css";
import ServiceTemplate from "./Components/Services/ServiceTemplate";
import AboutUsTemplate from "./Components/AboutUs/AboutUsTemplate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/aboutus/:section" element={<AboutUsTemplate />} />
        <Route
          path="/services/:section/:subsection"
          element={<ServiceTemplate />}
        />
      </Routes>
    </Router>
  );
}

export default App;
