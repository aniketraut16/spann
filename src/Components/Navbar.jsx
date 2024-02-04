import React, { useEffect, useState } from "react";
import logo from "./Images/logo .png";
import { Link } from "react-router-dom";
function Navbar(props) {
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
          <li>Forensic Due Diligence</li>
          <Link to="/services/investigationandduedilligence/cyberforensics">
            Cyber Forensics
          </Link>
        </ul>

        <Link to="/services/investigationandduedilligence/informationsecurityandsystem">
          Information Security and Systems{" "}
        </Link>
        <ul>
          <li>Supply Chain Investigations </li>
          <ul>
            <Link to="/services/investigationandduedilligence/sourceinvestigation">
              Source Investigations{" "}
            </Link>
          </ul>
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
        <Link to="/aboutus/history"> History</Link>
        <Link to="/aboutus/missionvisionvalues">
          {" "}
          Mission, Vision and Values
        </Link>
        <Link to="/aboutus/valuesandexpectations"> Value Creation</Link>
        <Link to="/aboutus/fundingmodels"> Funding Model</Link>
        <ul>
          <li> Strategy</li>
          <Link to="/aboutus/strategy">Ace Methodology</Link>
        </ul>
        <Link to="/aboutus/capability"> Capability</Link>
        <Link to="/aboutus/bestpractices"> Best Practices </Link>
        <Link to="/aboutus/leadershipteam"> Leadership Team</Link>
        <Link to="/aboutus/organisationstructure">
          {" "}
          Organisation Structure{" "}
        </Link>
        <Link to="/aboutus/rolesandresponsibility">
          {" "}
          Roles and Responsibilities{" "}
        </Link>
        <Link to="/aboutus/governance"> Governance (Advisory Board)</Link>
        <Link to="/aboutus/partnerships"> Partnerships </Link>
        <Link to="/aboutus/offices">
          {" "}
          Offices (Singapore, India, Bangladesh)
        </Link>
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
      default:
        setDropdownContent(null);
    }
  };

  return (
    <div id="nav-div" className={isScrolled ? "scrolled" : ""}>
      <nav
        style={
          isScrolled
            ? props.white
              ? { height: "13vh", color: "black", backgroundColor: "white" }
              : { height: "13vh", color: "black" }
            : {}
        }
      >
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className="div-link-section">
          <div className="upper-div">
            <div>Contact us</div>
            <div className="searchbox">
              <i className="fa-solid fa-user"></i> <span>Login</span>{" "}
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="lower-div">
            <div
              onMouseEnter={() => {
                handleNavHover(2);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              About Us
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(1);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Service
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(3);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              SPAN Suite
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(4);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Industries Served
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(5);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Training Programs
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <div
              onMouseEnter={() => {
                handleNavHover(6);
                setdropdownDisplay(true);
              }}
              onMouseLeave={() => setdropdownDisplay(false)}
            >
              Resources & Toolkits
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
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
