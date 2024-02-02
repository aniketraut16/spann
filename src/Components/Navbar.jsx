import React, { useEffect, useState } from "react";
import logo from "./Images/logo .png";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="nav-div" className={isScrolled ? "scrolled" : ""}>
      <nav style={isScrolled ? { height: "13vh" } : {}}>
        <img src={logo} alt="Logo" />
        <div className="div-link-section">
          <div className="upper-div">
            <div>About Us</div>
            <div>Service</div>
            <div>Articles</div>
            <div>Resource</div>
          </div>
          <div>
            <div>Training Program</div>
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
