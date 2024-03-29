import React, { useEffect, useState } from "react";
import logo from "./Images/logo .png";
import { Link } from "react-router-dom";
function Navbar() {
  const [dropdownDisplay, setdropdownDisplay] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);
  const [currentDd, setcurrentDd] = useState(0);
  const [currentServiceDd, setcurrentServiceDd] = useState(0);
  const [servicedropdownContent, setserviceDropdownContent] = useState(null);
  const [serviveddDisplay, setserviveddDisplay] = useState(false);
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
      <ul className="level1dd">
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/spansuit/systemprocessandtools"
        >
          Systems, Processes and Tools
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/spansuit/mobileappview"
        >
          Mobile APP
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/spansuit/brandprotection"
        >
          Brand Protection
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </ul>
    );
  };
  const IndustriesServedDropdown = () => {
    return (
      <ul className="level1dd">
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/industries/overviewofindustries"
        >
          {" "}
          Overview of Industries
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/industries/successtory"
        >
          {" "}
          Success Stories/ Case Studies /Testimonials
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </ul>
    );
  };
  const ContactUsDropdown = () => {
    return (
      <ul className="level1dd">
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/contactus"
        >
          {" "}
          Contact Form
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/inquiry"
        >
          {" "}
          Inquiry/Consultation Request
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </ul>
    );
  };
  const ResourcesToolkitsDropdown = () => {
    return (
      <ul className="level1dd">
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/blogs"
        >
          {" "}
          Blog/Articles/ Videos
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/whitepaper"
        >
          {" "}
          Whitepapers
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/casestudy"
        >
          {" "}
          Case Studies
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/brandprotection"
        >
          {" "}
          Brand Protection Toolkits{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </ul>
    );
  };
  const AboutUsDropdown = () => {
    return (
      <ul className="level1dd">
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/history"
        >
          {" "}
          History
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/about/directorsmessage"
        >
          {" "}
          Directors message
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/missionvisionvalues"
        >
          {" "}
          Mission, Vision and Values
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/valuesandexpectations"
        >
          {" "}
          Value Creation
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/fundingmodels"
        >
          {" "}
          Funding Model
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>

        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/strategy"
        >
          Strategy
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>

        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/capability"
        >
          {" "}
          Capability
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/bestpractices"
        >
          {" "}
          Best Practices <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/leadershipteam"
        >
          {" "}
          Leadership Team
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/organisationstructure"
        >
          {" "}
          Organisation Structure{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/rolesandresponsibility"
        >
          {" "}
          Roles and Responsibilities{" "}
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/governance"
        >
          {" "}
          Governance
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
        {/* <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/partnerships"
        >
          {" "}
          Partnerships{" "}
           <i className="fa-solid fa-arrow-right-long"></i>
        </Link> */}
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/offices"
        >
          {" "}
          Offices
          <i className="fa-solid fa-arrow-right-long"></i>
        </Link>
      </ul>
    );
  };
  const ServicesDropdown = () => {
    return (
      <ul className="level1dd">
        <span
          onClick={() => {
            handleServiceNavHover(1);
            setserviveddDisplay(true);
          }}
        >
          Legal Brand Protection
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(2);
            setserviveddDisplay(true);
          }}
        >
          Strategic Consulting
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(3);
            setserviveddDisplay(true);
          }}
        >
          Investigations & Due Diligence
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(4);
            setserviveddDisplay(true);
          }}
        >
          Training
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(5);
            setserviveddDisplay(true);
          }}
        >
          Services for the Legal Industry
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
      </ul>
    );
  };

  // Service SubSections

  const ServiceLegalBrandProtection = () => {
    return (
      <>
        <h3
          onClick={() => {
            setserviveddDisplay(false);
          }}
        >
          {" "}
          <i className="fa-solid fa-angle-left"></i>
          LEGAL BRAND PROTECTION
        </h3>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/overview"
        >
          {" "}
          Overview{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/ipregistration"
        >
          {" "}
          IP Registration and Prosecution{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/ipaudits"
        >
          {" "}
          IP Audits, SC Audits, EM Audit, Security Audits{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/intellectualproperties"
        >
          {" "}
          Intellectual Property{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/confidentialinformation"
        >
          {" "}
          Confidential Information and Trade Secrets{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/healthcareandregulations"
        >
          {" "}
          Healthcare and Regulatory Laws{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/mediaentertainmentandsportslaws"
        >
          {" "}
          Media, Entertainment & Sports Laws{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/leagalbrandprotection/digitalanditlaw"
        >
          {" "}
          Digital & IT Laws{" "}
        </Link>
      </>
    );
  };
  const ServiceStrategicConsulting = () => {
    return (
      <>
        <h3
          onClick={() => {
            setserviveddDisplay(false);
          }}
        >
          {" "}
          <i className="fa-solid fa-angle-left"></i>
          STRATEGIC CONSULTING
        </h3>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/stratagicconsulting/overview"
        >
          Overview{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/stratagicconsulting/comprehensivelegalandbusinessriskconsultancy"
        >
          Comprehensive Legal and Business Risk Consulting{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/stratagicconsulting/riskassesmentandmigrationplan"
        >
          Risk Assessments and Mitigation Plans{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/stratagicconsulting/customizedconsultingservice"
        >
          Customized Consulting Services{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/stratagicconsulting/chainsupplysecurityandintegratityprogram"
        >
          Supply Chain Security/Integrity Programs{" "}
        </Link>
      </>
    );
  };
  const ServicesInvestigationsDueDiligence = () => {
    return (
      <>
        <h3
          onClick={() => {
            setserviveddDisplay(false);
          }}
        >
          {" "}
          <i className="fa-solid fa-angle-left"></i>
          INVESTIGATIONS & DUE DILIGENCE
        </h3>
        {/* <li>Product Security Investigations and Enforcement (PSI&E) </li> */}
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/counterfeit"
        >
          Counterfeits
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/diversion"
        >
          Diversion
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/producttampering"
        >
          Product Tampering{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/leadgeneration"
        >
          Lead Generation{" "}
        </Link>
        {/* <li>Due Diligence</li> */}
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/counterpartyduediligence"
        >
          Counter Party Due Diligence{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/seniormanagementduediligence"
        >
          Senior Management Due Diligence{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/integrityduediligence"
        >
          Integrity Due Diligence{" "}
        </Link>
        {/* <li>Theft Investigations </li> */}
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/facility"
        >
          Facility
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/intransit"
        >
          {" "}
          In-Transit{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/digital"
        >
          {" "}
          Digital{" "}
        </Link>
        {/* <li>KYC and Background Checks </li> */}
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/aml"
        >
          AML
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/kyc"
        >
          KYC
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/marketresearch"
        >
          Market Research
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/marketintelligence"
        >
          Market Intelligence Gathering{" "}
        </Link>
        {/* <li>Forensic Due Diligence</li> */}
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/cyberforensics"
        >
          Cyber Forensics
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/informationsecurityandsystem"
        >
          Information Security and Systems{" "}
        </Link>
        {/* <li>Supply Chain Investigations </li> */}

        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/investigationandduedilligence/sourceinvestigation"
        >
          Source Investigations{" "}
        </Link>
      </>
    );
  };
  const ServicesTraing = () => {
    return (
      <>
        <h3
          onClick={() => {
            setserviveddDisplay(false);
          }}
        >
          {" "}
          <i className="fa-solid fa-angle-left"></i>
          TRAINING
        </h3>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/traning/mlc"
        >
          MLC
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/traning/iprinschool"
        >
          IPR in Schools
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/traning/softskills"
        >
          Soft Skills{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/traning/overview"
        >
          {" "}
          Overview
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/traning/lawenforcementagenciestraining"
        >
          {" "}
          Law Enforcement Agencies (LEA) Training
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/traning/customtraning"
        >
          {" "}
          Customs Training
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/traning/externalandinternalstackholdertraning"
        >
          {" "}
          External and Internal Stakeholder Training
        </Link>
      </>
    );
  };
  const ServicesfirtheLegalIndustries = () => {
    return (
      <>
        <h3
          onClick={() => {
            setserviveddDisplay(false);
          }}
        >
          {" "}
          <i className="fa-solid fa-angle-left"></i>
          SERVICES FOR THE LEGAL INDUSTRY
        </h3>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/services/serviceforlegalindustries/tminuse"
        >
          TM In-Use
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
        setcurrentDd(1);
        setserviveddDisplay(false);
        setcurrentServiceDd(null);
        break;
      case 2:
        setDropdownContent(<ServicesDropdown />);
        setcurrentDd(2);
        setserviveddDisplay(false);
        setcurrentServiceDd(null);

        break;
      case 3:
        setDropdownContent(<IndustriesServedDropdown />);
        setcurrentDd(3);
        setserviveddDisplay(false);
        setcurrentServiceDd(null);

        break;
      case 4:
        setDropdownContent(<ResourcesToolkitsDropdown />);
        setcurrentDd(4);
        setserviveddDisplay(false);
        setcurrentServiceDd(null);

        break;
      case 5:
        setDropdownContent(<AboutUsDropdown />);
        setcurrentDd(5);
        setserviveddDisplay(false);
        setcurrentServiceDd(null);

        break;
      case 6:
        setDropdownContent(<ContactUsDropdown />);
        setcurrentDd(6);
        setserviveddDisplay(false);
        setcurrentServiceDd(null);

        break;
      default:
        setDropdownContent(null);
    }
  };

  // Level 2 Handing Function

  const handleServiceNavHover = (index) => {
    switch (index) {
      case 1:
        setserviceDropdownContent(<ServiceLegalBrandProtection />);
        setcurrentServiceDd(1);

        break;
      case 2:
        setserviceDropdownContent(<ServiceStrategicConsulting />);
        setcurrentServiceDd(2);

        break;
      case 3:
        setserviceDropdownContent(<ServicesInvestigationsDueDiligence />);
        setcurrentServiceDd(3);

        break;
      case 4:
        setserviceDropdownContent(<ServicesTraing />);
        setcurrentServiceDd(4);

        break;
      case 5:
        setserviceDropdownContent(<ServicesfirtheLegalIndustries />);
        setcurrentServiceDd(5);

        break;
      default:
        setserviceDropdownContent(null);
    }
  };

  return (
    <>
      <nav
        style={
          isScrolled
            ? { backgroundColor: "white", color: "#da0e29" }
            : { backgroundColor: "#fff8e3", color: "black" }
        }
      >
        <Link to="/" id="nav-logo">
          <img src={logo} alt="" />
        </Link>
        <div id="main-links">
          <span
            style={
              currentDd === 1 && dropdownDisplay === true
                ? { borderBottomColor: "#eb7c24" }
                : {}
            }
            onClick={() => {
              handleNavHover(1);
              setdropdownDisplay(true);
              currentDd === 1 && dropdownDisplay === true
                ? setdropdownDisplay(false)
                : setdropdownDisplay(true);
            }}
            to="/"
          >
            SPAN Suite
          </span>
          <span
            style={
              currentDd === 2 && dropdownDisplay === true
                ? { borderBottomColor: "#eb7c24" }
                : {}
            }
            onClick={() => {
              handleNavHover(2);
              setdropdownDisplay(true);
              currentDd === 2 && dropdownDisplay === true
                ? setdropdownDisplay(false)
                : setdropdownDisplay(true);
            }}
            to="/"
          >
            Services
          </span>
          <Link
            style={isScrolled ? { color: "#da0e29" } : { color: "black" }}
            onClick={() => {
              setdropdownDisplay(false);
            }}
            to="/partnership"
          >
            Partners
          </Link>
          <span
            style={
              currentDd === 3 && dropdownDisplay === true
                ? { borderBottomColor: "#eb7c24" }
                : {}
            }
            onClick={() => {
              handleNavHover(3);
              setdropdownDisplay(true);
              currentDd === 3 && dropdownDisplay === true
                ? setdropdownDisplay(false)
                : setdropdownDisplay(true);
            }}
            to="/"
          >
            Industries
          </span>
          <span
            style={
              currentDd === 4 && dropdownDisplay === true
                ? { borderBottomColor: "#eb7c24" }
                : {}
            }
            onClick={() => {
              handleNavHover(4);
              setdropdownDisplay(true);
              currentDd === 4 && dropdownDisplay === true
                ? setdropdownDisplay(false)
                : setdropdownDisplay(true);
            }}
            to="/"
          >
            Resources and Toolkits
          </span>
          <span
            style={
              currentDd === 5 && dropdownDisplay === true
                ? { borderBottomColor: "#eb7c24" }
                : {}
            }
            onClick={() => {
              handleNavHover(5);
              setdropdownDisplay(true);
              currentDd === 5 && dropdownDisplay === true
                ? setdropdownDisplay(false)
                : setdropdownDisplay(true);
            }}
            to="/"
          >
            About Us
          </span>
          <span
            style={
              currentDd === 6 && dropdownDisplay === true
                ? { borderBottomColor: "#eb7c24" }
                : {}
            }
            onClick={() => {
              handleNavHover(6);
              setdropdownDisplay(true);
              currentDd === 6 && dropdownDisplay === true
                ? setdropdownDisplay(false)
                : setdropdownDisplay(true);
            }}
            to="/"
          >
            Contact Us
          </span>
        </div>
        <div id="other-links">
          <Link
            style={isScrolled ? { color: "#da0e29" } : { color: "black" }}
            to="/"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <p> Search </p>
          </Link>
          <Link
            style={isScrolled ? { color: "#da0e29" } : { color: "black" }}
            to="/signin"
          >
            <i className="fa-solid fa-user"></i>
            <p> Login </p>
          </Link>
        </div>
      </nav>
      <div
        id="dropdown"
        style={{
          top: `${dropdownDisplay ? "10vh" : "-100vh"}`,
          minHeight: `${
            currentServiceDd === 3
              ? "80vh"
              : currentDd === 2
              ? "50vh"
              : "fit-content"
          }`,
        }}
      >
        {dropdownContent}
        <ul
          className="level2dd"
          style={
            serviveddDisplay
              ? { left: "67%", visibility: "visible" }
              : { left: "33%", visibility: "hidden" }
          }
        >
          {servicedropdownContent}
        </ul>
        <div
          id="empty-div"
          onClick={() => {
            setdropdownDisplay(false);
          }}
        ></div>
      </div>
    </>
  );
}

export default Navbar;
