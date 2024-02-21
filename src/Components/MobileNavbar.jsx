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

  const handleAccordionClick = (event) => {
    const accordionButton = event.target;
    const content = accordionButton.nextElementSibling;

    // Close all accordions
    const allAccordionContents =
      document.querySelectorAll(".accordion-content");
    allAccordionContents.forEach((accordionContent) => {
      if (accordionContent !== content) {
        accordionContent.style.maxHeight = null;
        accordionContent.previousElementSibling.classList.remove("is-open");
      }
    });

    // Toggle the clicked accordion
    accordionButton.classList.toggle("is-open");

    if (content.style.maxHeight) {
      content.style.maxHeight = null; // Close the accordion
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // Open the accordion
    }
  };

  const activeBurger = () => {
    if (isBurgerActive) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const ServicesDropdown = () => {
    return (
      <>
        <span className="accordion" onClick={handleAccordionClick}>
          Legal Brand Protection
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/overview"
          >
            {" "}
            Overview{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/ipregistration"
          >
            {" "}
            IP Registration and Prosecution{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/ipaudits"
          >
            {" "}
            IP Audits, SC Audits, EM Audit, Security Audits{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/intellectualproperties"
          >
            {" "}
            Intellectual Property (Trademarks, Copyrights, Patents, Designs){" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/confidentialinformation"
          >
            {" "}
            Confidential Information and Trade Secrets{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/healthcareandregulations"
          >
            {" "}
            Healthcare and Regulatory Laws{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/mediaentertainmentandsportslaws"
          >
            {" "}
            Media, Entertainment & Sports Laws{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/leagalbrandprotection/digitalanditlaw"
          >
            {" "}
            Digital & IT Laws{" "}
          </Link>
        </div>
        <span className="accordion" onClick={handleAccordionClick}>
          Strategic Consulting
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/stratagicconsulting/overview"
          >
            Overview{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/stratagicconsulting/comprehensivelegalandbusinessriskconsultancy"
          >
            Comprehensive Legal and Business Risk Consulting{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/stratagicconsulting/riskassesmentandmigrationplan"
          >
            Risk Assessments and Mitigation Plans{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/stratagicconsulting/customizedconsultingservice"
          >
            Customized Consulting Services{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/stratagicconsulting/chainsupplysecurityandintegratityprogram"
          >
            Supply Chain Security/Integrity Programs{" "}
          </Link>
        </div>

        <span className="accordion" onClick={handleAccordionClick}>
          Investigations & Due Diligence
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/counterfeit"
          >
            Counterfeits
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/diversion"
          >
            Diversion
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/producttampering"
          >
            Product Tampering{" "}
          </Link>
          {/* <li>Due Diligence</li> */}
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/counterpartyduediligence"
          >
            Counter Party Due Diligence{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/seniormanagementduediligence"
          >
            Senior Management Due Diligence{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/integrityduediligence"
          >
            Integrity Due Diligence{" "}
          </Link>
          {/* <li>Theft Investigations </li> */}
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/facility"
          >
            Facility
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/intransit"
          >
            {" "}
            In-Transit{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/digital"
          >
            {" "}
            Digital{" "}
          </Link>
          {/* <li>KYC and Background Checks </li> */}
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/aml"
          >
            AML
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/kyc"
          >
            KYC
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/marketresearch"
          >
            Market Research (Primary and Secondary)
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/marketintelligence"
          >
            Market Intelligence Gathering{" "}
          </Link>
          {/* <li>Forensic Due Diligence</li> */}
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/cyberforensics"
          >
            Cyber Forensics
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/informationsecurityandsystem"
          >
            Information Security and Systems{" "}
          </Link>
          {/* <li>Supply Chain Investigations </li> */}

          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/investigationandduedilligence/sourceinvestigation"
          >
            Source Investigations{" "}
          </Link>
        </div>

        <span className="accordion" onClick={handleAccordionClick}>
          Training
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/traning/mlc"
          >
            MLC
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/traning/iprinschool"
          >
            IPR in Schools
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/traning/softskills"
          >
            Soft Skills{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/traning/overview"
          >
            {" "}
            Overview
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/traning/lawenforcementagenciestraining"
          >
            {" "}
            Law Enforcement Agencies (LEA) Training
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/traning/customtraning"
          >
            {" "}
            Customs Training
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/traning/externalandinternalstackholdertraning"
          >
            {" "}
            External and Internal Stakeholder Training
          </Link>
        </div>

        <span className="accordion" onClick={handleAccordionClick}>
          Services for the Legal Industry
        </span>
        <div className="accordion-content">
          <Link
            onClick={() => {
              setisBurgerActive(!isBurgerActive);
              activeBurger();
              setisLevel2Active(false);
            }}
            to="/services/serviceforlegalindustries/tminuse"
          >
            TM In-Use
          </Link>
        </div>
      </>
    );
  };

  //Dropdown Contents

  const SpanSuitDropdown = () => {
    return (
      <>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            activeBurger();
            setisLevel2Active(false);
          }}
          to="/spansuit/systemprocessandtools"
        >
          Systems, Processes and Tools
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            activeBurger();
            setisLevel2Active(false);
          }}
          to="/spansuit/mobileappview"
        >
          Mobile APP
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
            setisLevel2Active(false);
          }}
          to="/aboutus/strategy"
        >
          Strategy
        </Link>

        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
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
            activeBurger();
          }}
          to="/contactus"
        >
          Contact Us
        </Link>
        <Link
          onClick={() => {
            setisBurgerActive(!isBurgerActive);
            activeBurger();
          }}
          to="/"
          className="my-account"
        >
          <i className="fa-solid fa-user"></i>
          My Account
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
