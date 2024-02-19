import React, { useEffect, useState } from "react";
import logo from "./Images/logo .png";
import { Link } from "react-router-dom";
function MobileNavbar() {
  const [isBurgerActive, setisBurgerActive] = useState(false);
  const [isLevel2Active, setisLevel2Active] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);
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

  //Dropdown Contents

  const SpanSuitDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/spansuit/systemprocessandtools"
        >
          Systems, Processes and Tools
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/spansuit/mobileappview"
        >
          Mobile APP
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/spansuit/brandprotection"
        >
          Brand Protection
        </Link>
      </>
    );
  };
  const IndustriesServedDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/industries/overviewofindustries"
        >
          {" "}
          Overview of Industries
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/industries/successtory"
        >
          {" "}
          Success Stories/ Case Studies /Testimonials
        </Link>
      </>
    );
  };
  const ResourcesToolkitsDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/resources/blogs"
        >
          {" "}
          Blog/Articles/ Videos
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/resources/whitepaper"
        >
          {" "}
          Whitepapers
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/resources/casestudy"
        >
          {" "}
          Case Studies
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/resources/brandprotection"
        >
          {" "}
          Brand Protection Toolkits{" "}
        </Link>
      </>
    );
  };
  const AboutUsDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/history"
        >
          {" "}
          History
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/about/directorsmessage"
        >
          {" "}
          Directors message
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/missionvisionvalues"
        >
          {" "}
          Mission, Vision and Values
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/valuesandexpectations"
        >
          {" "}
          Value Creation
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/fundingmodels"
        >
          {" "}
          Funding Model
        </Link>

        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/strategy"
        >
          Strategy
        </Link>

        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/capability"
        >
          {" "}
          Capability
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/bestpractices"
        >
          {" "}
          Best Practices{" "}
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/leadershipteam"
        >
          {" "}
          Leadership Team
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/organisationstructure"
        >
          {" "}
          Organisation Structure{" "}
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/rolesandresponsibility"
        >
          {" "}
          Roles and Responsibilities{" "}
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/governance"
        >
          {" "}
          Governance (Advisory Board)
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/partnerships"
        >
          {" "}
          Partnerships{" "}
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
          to="/aboutus/offices"
        >
          {" "}
          Offices (Singapore, India, Bangladesh)
        </Link>
      </>
    );
  };
  const ServicesDropdown = () => {
    return (
      <>
        <span
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
        >
          Legal Brand Protection
        </span>
        <span
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
        >
          Strategic Consulting
        </span>
        <span
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
        >
          Investigations & Due Diligence
        </span>
        <span
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
        >
          Training
        </span>
        <span
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
        >
          Services for the Legal Industry
        </span>
      </>
    );
  };

  // Level 1 Handing Function

  const handleNavHover = (index) => {
    // Set dropdown content based on the hovered index
    switch (index) {
      case 1:
        setDropdownContent(<SpanSuitDropdown />);
        setisLevel2Active(true);
        break;
      case 2:
        setDropdownContent(<ServicesDropdown />);
        setisLevel2Active(true);

        break;
      case 3:
        setDropdownContent(<IndustriesServedDropdown />);
        setisLevel2Active(true);

        break;
      case 4:
        setDropdownContent(<ResourcesToolkitsDropdown />);
        setisLevel2Active(true);

        break;
      case 5:
        setDropdownContent(<AboutUsDropdown />);
        setisLevel2Active(true);

        break;
      default:
        setDropdownContent(null);
    }
  };

  return (
    <div id="MobileNavbar">
      <div
        id="mobNav"
        style={
          isScrolled
            ? { backgroundColor: "white" }
            : { backgroundColor: "#fff8e3" }
        }
      >
        <Link clasName="level1navLink" to="/">
          {" "}
          <img src={logo} alt="" />{" "}
        </Link>
        <i className="fa-solid fa-magnifying-glass"></i>
        <div
          className="burger"
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            setisLevel2Active(false);
          }}
        >
          <div
            className="top"
            style={
              isBurgerActive
                ? { transform: "rotate(45deg) translateY(8px)" }
                : { transform: "rotate(0deg) translateY(0%)" }
            }
          ></div>
          <div
            className="middle"
            style={
              isBurgerActive
                ? { transform: "translateX(500%)" }
                : { transform: "translateX(0%)" }
            }
          ></div>
          <div
            className="bottom"
            style={
              isBurgerActive
                ? { transform: "rotate(-45deg) translateY(-8px)" }
                : { transform: "rotate(0deg) translateY(0%)" }
            }
          ></div>
        </div>
      </div>
      <div
        id="mobNavL1"
        style={isBurgerActive ? { right: "0%" } : { right: "-101%" }}
      >
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(1);
          }}
        >
          Span Suit
        </span>
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(2);
          }}
        >
          Services
        </span>
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(3);
          }}
        >
          Industries
        </span>
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(4);
          }}
        >
          Resources and Toolkits
        </span>
        <span
          onClick={() => {
            setisLevel2Active(true);
            handleNavHover(5);
          }}
        >
          About Us
        </span>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
          }}
          to="/contactus"
        >
          Contact Us
        </Link>
      </div>
      <div
        id="mobNavL2"
        style={isLevel2Active ? { right: "0%" } : { right: "-101%" }}
      >
        <div
          id="back-btn"
          onClick={() => {
            setisLevel2Active(false);
          }}
        >
          <i className="fa-solid fa-angle-left"></i>
          Back
        </div>

        {dropdownContent}
      </div>
    </div>
  );
}

export default MobileNavbar;
