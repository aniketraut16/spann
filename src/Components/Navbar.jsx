import React, { useEffect, useState } from "react";
import logo from "./Images/logo .png";
import { Link } from "react-router-dom";
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownContent, setDropdownContent] = useState(null);
  const [dropdownDisplay, setdropdownDisplay] = useState(false);
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

  const ServicesDropdown = () => {
    return (
      <>
        <ul>
          <li>Legal Brand Protection</li>
          <Link to="/services/leagalbrandprotection/overview"> Overview </Link>
          <Link to="/services/leagalbrandprotection/ipregistration">
            {" "}
            IP Registration and Prosecution{" "}
          </Link>
          <Link to="/services/leagalbrandprotection/ipaudits">
            {" "}
            IP Audits, SC Audits, EM Audit, Security Audits{" "}
          </Link>
          <Link to="/services/leagalbrandprotection/intellectualproperties">
            {" "}
            Intellectual Property (Trademarks, Copyrights, Patents, Designs){" "}
          </Link>
          <Link to="/services/leagalbrandprotection/confidentialinformation">
            {" "}
            Confidential Information and Trade Secrets{" "}
          </Link>
          <Link to="/services/leagalbrandprotection/healthcareandregulations">
            {" "}
            Healthcare and Regulatory Laws{" "}
          </Link>
          <Link to="/services/leagalbrandprotection/mediaentertainmentandsportslaws">
            {" "}
            Media, Entertainment & Sports Laws{" "}
          </Link>
          <Link to="/services/leagalbrandprotection/digitalanditlaw">
            {" "}
            Digital & IT Laws{" "}
          </Link>
        </ul>
        <ul>
          <li>Strategic Consulting</li>
          <Link to="/services/stratagicconsulting/overview">Overview </Link>
          <Link to="/services/stratagicconsulting/comprehensivelegalandbusinessriskconsultancy">
            Comprehensive Legal and Business Risk Consulting{" "}
          </Link>
          <Link to="/services/stratagicconsulting/riskassesmentandmigrationplan">
            Risk Assessments and Mitigation Plans{" "}
          </Link>
          <Link to="/services/stratagicconsulting/customizedconsultingservice">
            Customized Consulting Services{" "}
          </Link>
          <Link to="/services/stratagicconsulting/chainsupplysecurityandintegratityprogram">
            Supply Chain Security/Integrity Programs{" "}
          </Link>
        </ul>
        <ul>
          <li>Investigations & Due Diligence </li>
          <ul>
            <li>Product Security Investigations and Enforcement (PSI&E) </li>
            <Link to="/services/investigationandduedilligence/counterfeit">
              Counterfeits
            </Link>
            <Link to="/services/investigationandduedilligence/diversion">
              Diversion
            </Link>
            <Link to="/services/investigationandduedilligence/producttampering">
              Product Tampering{" "}
            </Link>
          </ul>
        </ul>

        <ul>
          <li>Due Diligence</li>
          <Link to="/services/investigationandduedilligence/counterpartyduediligence">
            Counter Party Due Diligence{" "}
          </Link>
          <Link to="/services/investigationandduedilligence/seniormanagementduediligence">
            Senior Management Due Diligence{" "}
          </Link>
          <Link to="/services/investigationandduedilligence/integrityduediligence">
            Integrity Due Diligence{" "}
          </Link>
        </ul>
        <ul>
          <li>Forensic Due Diligence</li>
          <Link to="/services/investigationandduedilligence/cyberforensics">
            Cyber Forensics
          </Link>
        </ul>
        <ul>
          <li>Supply Chain Investigations </li>
          <ul>
            <Link to="/services/investigationandduedilligence/sourceinvestigation">
              Source Investigations{" "}
            </Link>
            <ul>
              <li>Theft Investigations </li>
              <Link to="/services/investigationandduedilligence/facility">
                Facility
              </Link>
              <Link to="/services/investigationandduedilligence/transit">
                {" "}
                In-Transit{" "}
              </Link>
              <Link to="/services/investigationandduedilligence/digital">
                {" "}
                Digital{" "}
              </Link>
            </ul>
          </ul>
        </ul>
        <Link to="/services/investigationandduedilligence/informationsecurityandsystem">
          Information Security and Systems{" "}
        </Link>
        <ul>
          <li>KYC and Background Checks </li>
          <Link to="/services/investigationandduedilligence/aml">AML</Link>
          <Link to="/services/investigationandduedilligence/kyc">KYC</Link>
          <Link to="/services/investigationandduedilligence/marketresearch">
            Market Research (Primary and Secondary)
          </Link>
          <Link to="/services/investigationandduedilligence/marketintelligence">
            Market Intelligence Gathering{" "}
          </Link>
        </ul>
        <ul>
          <li>Tranings </li>
          <Link to="/services/traning/mlc">MLC</Link>
          <Link to="/services/traning/iprinschool">IPR in Schools</Link>
          <Link to="/services/traning/softskills">Soft Skills </Link>
        </ul>

        <ul>
          <li>Services for the Legal Industry </li>
          <Link to="/services/serviceforlegalindustries/tminuse">
            TM In-Use
          </Link>
        </ul>
      </>
    );
  };
  const AboutUsDropdown = () => {
    return (
      <>
        <a href="#"> History</a>
        <a href="#"> Mission, Vision and Values</a>
        <a href="#"> Value Creation</a>
        <a href="#"> Funding Model</a>
        <ul>
          <li> Strategy</li>
          <a href="#">Ace Methodology</a>
        </ul>
        <a href="#"> Capability</a>
        <a href="#"> Best Practices </a>
        <a href="#"> Leadership Team</a>
        <a href="#"> Organisation Structure </a>
        <a href="#"> Roles and Responsibilities </a>
        <a href="#"> Governance (Advisory Board)</a>
        <a href="#"> Partnerships </a>
        <a href="#"> Offices (Singapore, India, Bangladesh)</a>
      </>
    );
  };
  const SpanSuitDropdown = () => {
    return (
      <>
        <a href="#">Systems, Processes and Tools</a>
      </>
    );
  };
  const IndustriesServedDropdown = () => {
    return (
      <>
        <a href="#"> Overview of Industries</a>
        <a href="#"> Success Stories/ Case Studies /Testimonials</a>
      </>
    );
  };

  const TrainingProgramsDropdown = () => {
    return (
      <>
        <a href="#"> Overview</a>
        <a href="#"> Law Enforcement Agencies (LEA) Training</a>
        <a href="#"> Customs Training</a>
        <a href="#"> External and Internal Stakeholder Training</a>
      </>
    );
  };

  const ResourcesToolkitsDropdown = () => {
    return (
      <>
        <a href="#"> Blog/Articles/ Videos</a>
        <a href="#"> Whitepapers</a>
        <a href="#"> Case Studies</a>
        <a href="#"> Brand Protection Toolkits </a>
      </>
    );
  };

  const ContactUsDropdown = () => {
    return (
      <>
        <a href="#">Office Addresses</a>
        <a href="#">Contact Form</a>
        <a href="#">Inquiry/Consultation Request</a>
      </>
    );
  };

  const handleNavHover = (index) => {
    // Set dropdown content based on the hovered index
    switch (index) {
      case 1:
        setDropdownContent(<ServicesDropdown />);
        break;
      case 2:
        setDropdownContent(<AboutUsDropdown />);
        break;
      case 3:
        setDropdownContent(<SpanSuitDropdown />);
        break;
      case 4:
        setDropdownContent(<IndustriesServedDropdown />);
        break;
      case 5:
        setDropdownContent(<TrainingProgramsDropdown />);
        break;
      case 6:
        setDropdownContent(<ResourcesToolkitsDropdown />);
        break;
      case 7:
        setDropdownContent(<ContactUsDropdown />);
        break;
      default:
        setDropdownContent(null);
    }
  };

  return (
    <div id="nav-div" className={isScrolled ? "scrolled" : ""}>
      <nav style={isScrolled ? { height: "13vh", color: "black" } : {}}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="div-link-section">
          <div>
            <div
              onMouseEnter={() => {
                handleNavHover(3);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              SPAN Suite
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(4);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Industries Served
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(5);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Training Programs
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(6);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Resources & Toolkits
            </div>
          </div>
          <div className="upper-div">
            <div>Home</div>
            <div
              onMouseEnter={() => {
                handleNavHover(2);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              About Us
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(1);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Service
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(7);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Contact us
            </div>
          </div>
        </div>
        <div className="searchbox">
          <i className="fa-solid fa-user"></i> <span>Login</span>{" "}
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </nav>
      <div
        id="dropdown"
        style={dropdownDisplay ? { display: "flex" } : { display: "none" }}
        onMouseEnter={() => {
          setdropdownDisplay(true);
        }}
        onMouseLeave={() => {
          setdropdownDisplay(false);
        }}
      >
        {dropdownContent}
      </div>
    </div>
  );
}

export default Navbar;
