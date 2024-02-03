import React, { useEffect, useState } from "react";
import logo from "./Images/logo .png";
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
          <a href="#">Overview</a>
          <a href="#">IP Registration and Prosecution</a>
          <a href="#">IP Audits, SC Audits, EM Audit, Security Audits </a>
          <a href="#">
            Intellectual Property (Trademarks, Copyrights, Patents, Designs)
          </a>
          <a href="#">Confidential Information and Trade Secrets</a>
          <a href="#">Healthcare and Regulatory Laws</a>
          <a href="#">Media, Entertainment & Sports Laws</a>
          <a href="#">Digital & IT Laws </a>
        </ul>
        <ul>
          <li>Strategic Consulting</li>
          <a href="#">Overview </a>
          <a href="#">Comprehensive Legal and Business Risk Consulting </a>
          <a href="#">Risk Assessments and Mitigation Plans </a>
          <a href="#">Customized Consulting Services </a>
          <a href="#">Supply Chain Security/Integrity Programs </a>
        </ul>
        <ul>
          <li>Investigations & Due Diligence </li>
          <ul>
            <li>Product Security Investigations and Enforcement (PSI&E) </li>
            <a href="#">Counterfeits</a>
            <a href="#">Diversion</a>
            <a href="#">Product Tampering </a>
          </ul>
          <ul>
            <li>Due Diligence</li>
            <a href="#">Counter Party Due Diligence </a>
            <a href="#">Senior Management Due Diligence </a>
            <a href="#">Integrity Due Diligence </a>
          </ul>
          <ul>
            <li>Forensic Due Diligence</li>
            <a href="#">Cyber Forensics</a>
          </ul>
          <ul>
            <li>Supply Chain Investigations </li>
            <ul>
              <a href="#">Source Investigations </a>
              <ul>
                <li>Theft Investigations </li>
                <a href="#">Facility</a>
                <a href="#"> In-Transit </a>
                <a href="#"> Digital </a>
              </ul>
            </ul>
          </ul>
          <a href="#">Information Security and Systems </a>
          <ul>
            <li>KYC and Background Checks </li>
            <a href="#">AML</a>
            <a>KYC</a>
          </ul>
          <a href="#">Market Research (Primary and Secondary)</a>
          <a href="#">Market Intelligence Gathering </a>
        </ul>
        <ul>
          <li>Tranings </li>
          <a href="#">MLC</a>
          <a href="#">IPR in Schools</a>
          <a href="#">Soft Skills </a>
        </ul>

        <ul>
          <li>Services for the Legal Industry </li>
          <a href="#">TM In-Use</a>
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
      <nav style={isScrolled ? { height: "13vh" } : {}}>
        <img src={logo} alt="Logo" />
        <div className="div-link-section">
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
        </div>
      </nav>
      <div
        id="dropdown"
        style={dropdownDisplay ? { display: "flex" } : { display: "none" }}
      >
        {dropdownContent}
      </div>
    </div>
  );
}

export default Navbar;
