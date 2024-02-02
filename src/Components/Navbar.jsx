import React from "react";
import logo from "./Images/logo .png";

function Navbar() {
  return (
    <div id="nav-div">
      <nav>
        <img src={logo} alt="#" />
        <div className="div-link-section">
          <div id="upper-div">
            <div>About Us</div>
            <div>Service</div>
            <div>Articles</div>
            <div>Resource</div>
          </div>
          <div>
            <div>Traning Program</div>
            <div>Industries</div>
            <div>Contact Us</div>
            <div>Fraud</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
