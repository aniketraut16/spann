// import React, { useEffect, useState } from "react";
// import logo from "./Images/logo .png";
// import { Link, useLocation } from "react-router-dom";
// import Accordion from "./Accordion";
// function Navbar() {
//   const [dropdownContent, setDropdownContent] = useState(null);
//   const [servicedropdownContent, setserviceDropdownContent] = useState(null);
//   const [isServiceOn, setisServiceOn] = useState(false);
//   const [dropdownDisplay, setdropdownDisplay] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       if (scrollPosition > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const ServiceLegalBrandProtection = () => {
//     return (
//       <>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/overview"
//         >
//           {" "}
//           Overview{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/ipregistration"
//         >
//           {" "}
//           IP Registration and Prosecution{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/ipaudits"
//         >
//           {" "}
//           IP Audits, SC Audits, EM Audit, Security Audits{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/intellectualproperties"
//         >
//           {" "}
//           Intellectual Property (Trademarks, Copyrights, Patents, Designs){" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/confidentialinformation"
//         >
//           {" "}
//           Confidential Information and Trade Secrets{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/healthcareandregulations"
//         >
//           {" "}
//           Healthcare and Regulatory Laws{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/mediaentertainmentandsportslaws"
//         >
//           {" "}
//           Media, Entertainment & Sports Laws{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/leagalbrandprotection/digitalanditlaw"
//         >
//           {" "}
//           Digital & IT Laws{" "}
//         </Link>
//       </>
//     );
//   };
//   const ServiceStrategicConsulting = () => {
//     return (
//       <>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/stratagicconsulting/overview"
//         >
//           Overview{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/stratagicconsulting/comprehensivelegalandbusinessriskconsultancy"
//         >
//           Comprehensive Legal and Business Risk Consulting{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/stratagicconsulting/riskassesmentandmigrationplan"
//         >
//           Risk Assessments and Mitigation Plans{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/stratagicconsulting/customizedconsultingservice"
//         >
//           Customized Consulting Services{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/stratagicconsulting/chainsupplysecurityandintegratityprogram"
//         >
//           Supply Chain Security/Integrity Programs{" "}
//         </Link>
//       </>
//     );
//   };
//   const ServicesInvestigationsDueDiligence = () => {
//     return (
//       <>
//         {/* <li>Product Security Investigations and Enforcement (PSI&E) </li> */}
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/counterfeit"
//         >
//           Counterfeits
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/diversion"
//         >
//           Diversion
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/producttampering"
//         >
//           Product Tampering{" "}
//         </Link>
//         {/* <li>Due Diligence</li> */}
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/counterpartyduediligence"
//         >
//           Counter Party Due Diligence{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/seniormanagementduediligence"
//         >
//           Senior Management Due Diligence{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/integrityduediligence"
//         >
//           Integrity Due Diligence{" "}
//         </Link>
//         {/* <li>Theft Investigations </li> */}
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/facility"
//         >
//           Facility
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/intransit"
//         >
//           {" "}
//           In-Transit{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/digital"
//         >
//           {" "}
//           Digital{" "}
//         </Link>
//         {/* <li>KYC and Background Checks </li> */}
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/aml"
//         >
//           AML
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/kyc"
//         >
//           KYC
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/marketresearch"
//         >
//           Market Research (Primary and Secondary)
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/marketintelligence"
//         >
//           Market Intelligence Gathering{" "}
//         </Link>
//         {/* <li>Forensic Due Diligence</li> */}
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/cyberforensics"
//         >
//           Cyber Forensics
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/informationsecurityandsystem"
//         >
//           Information Security and Systems{" "}
//         </Link>
//         {/* <li>Supply Chain Investigations </li> */}

//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/investigationandduedilligence/sourceinvestigation"
//         >
//           Source Investigations{" "}
//         </Link>
//       </>
//     );
//   };
//   const ServicesTraing = () => {
//     return (
//       <>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/traning/mlc"
//         >
//           MLC
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/traning/iprinschool"
//         >
//           IPR in Schools
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/traning/softskills"
//         >
//           Soft Skills{" "}
//         </Link>
//       </>
//     );
//   };
//   const ServicesfirtheLegalIndustries = () => {
//     return (
//       <>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/services/serviceforlegalindustries/tminuse"
//         >
//           TM In-Use
//         </Link>
//       </>
//     );
//   };

//   const ServicesDropdown = () => {
//     return (
//       <>
//         <h2>Services</h2>
//         <span onClick={() => handleServiceNavHover(1)}>
//           Legal Brand Protection
//         </span>
//         <span onClick={() => handleServiceNavHover(2)}>
//           Strategic Consulting
//         </span>
//         <span onClick={() => handleServiceNavHover(3)}>
//           Investigations & Due Diligence
//         </span>
//         <span onClick={() => handleServiceNavHover(4)}>Training</span>
//         <span onClick={() => handleServiceNavHover(5)}>
//           Services for the Legal Industry
//         </span>
//       </>
//     );
//   };

//   const AboutUsDropdown = () => {
//     return (
//       <>
//         <h2>About Us</h2>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/history"
//         >
//           {" "}
//           History
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/about/directorsmessage"
//         >
//           {" "}
//           Directors message
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/missionvisionvalues"
//         >
//           {" "}
//           Mission, Vision and Values
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/valuesandexpectations"
//         >
//           {" "}
//           Value Creation
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/fundingmodels"
//         >
//           {" "}
//           Funding Model
//         </Link>

//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/strategy"
//         >
//           Strategy
//         </Link>

//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/capability"
//         >
//           {" "}
//           Capability
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/bestpractices"
//         >
//           {" "}
//           Best Practices{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/leadershipteam"
//         >
//           {" "}
//           Leadership Team
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/organisationstructure"
//         >
//           {" "}
//           Organisation Structure{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/rolesandresponsibility"
//         >
//           {" "}
//           Roles and Responsibilities{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/governance"
//         >
//           {" "}
//           Governance (Advisory Board)
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/partnerships"
//         >
//           {" "}
//           Partnerships{" "}
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/aboutus/offices"
//         >
//           {" "}
//           Offices (Singapore, India, Bangladesh)
//         </Link>
//       </>
//     );
//   };
//   const SpanSuitDropdown = () => {
//     return (
//       <>
//         <h2>Span Suit</h2>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/spansuit/systemprocessandtools"
//         >
//           Systems, Processes and Tools
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/spansuit/mobileappview"
//         >
//           Mobile APP
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/spansuit/brandprotection"
//         >
//           Brand Protection
//         </Link>
//       </>
//     );
//   };
//   const IndustriesServedDropdown = () => {
//     return (
//       <>
//         <h2>Industries Served</h2>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/industries/overviewofindustries"
//         >
//           {" "}
//           Overview of Industries
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/industries/successtory"
//         >
//           {" "}
//           Success Stories/ Case Studies /Testimonials
//         </Link>
//       </>
//     );
//   };

//   const TrainingProgramsDropdown = () => {
//     return (
//       <>
//         <h2>Traning Programs</h2>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/traning/overview"
//         >
//           {" "}
//           Overview
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/traning/lawenforcementagenciestraining"
//         >
//           {" "}
//           Law Enforcement Agencies (LEA) Training
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/traning/customtraning"
//         >
//           {" "}
//           Customs Training
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/traning/externalandinternalstackholdertraning"
//         >
//           {" "}
//           External and Internal Stakeholder Training
//         </Link>
//       </>
//     );
//   };

//   const ResourcesToolkitsDropdown = () => {
//     return (
//       <>
//         <h2>Resources Toolkits</h2>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/resources/blogs"
//         >
//           {" "}
//           Blog/Articles/ Videos
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/resources/whitepaper"
//         >
//           {" "}
//           Whitepapers
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/resources/casestudy"
//         >
//           {" "}
//           Case Studies
//         </Link>
//         <Link
//           onClick={() => {
//             setdropdownDisplay(false);
//           }}
//           to="/resources/brandprotection"
//         >
//           {" "}
//           Brand Protection Toolkits{" "}
//         </Link>
//       </>
//     );
//   };

//   const handleServiceNavHover = (index) => {
//     switch (index) {
//       case 1:
//         setserviceDropdownContent(<ServiceLegalBrandProtection />);
//         break;
//       case 2:
//         setserviceDropdownContent(<ServiceStrategicConsulting />);
//         break;
//       case 3:
//         setserviceDropdownContent(<ServicesInvestigationsDueDiligence />);
//         break;
//       case 4:
//         setserviceDropdownContent(<ServicesTraing />);
//         break;
//       case 5:
//         setserviceDropdownContent(<ServicesfirtheLegalIndustries />);
//         break;
//       default:
//         setserviceDropdownContent(null);
//     }
//   };

//   const handleNavHover = (index) => {
//     // Set dropdown content based on the hovered index
//     switch (index) {
//       case 1:
//         setDropdownContent(<ServicesDropdown />);
//         setisServiceOn(true);
//         break;
//       case 2:
//         setDropdownContent(<AboutUsDropdown />);
//         setisServiceOn(false);
//         break;
//       case 3:
//         setDropdownContent(<SpanSuitDropdown />);
//         setisServiceOn(false);
//         break;
//       case 4:
//         setDropdownContent(<IndustriesServedDropdown />);
//         setisServiceOn(false);
//         break;
//       case 5:
//         setDropdownContent(<TrainingProgramsDropdown />);
//         setisServiceOn(false);
//         break;
//       case 6:
//         setDropdownContent(<ResourcesToolkitsDropdown />);
//         setisServiceOn(false);
//         break;
//       default:
//         setDropdownContent(null);
//     }
//   };
//   const [isBurgerActive, setisBurgerActive] = useState(false);

//   //To find whether the device is Phone or not
//   const isPhone = window.innerWidth < 900 ? true : false;

//   return (
//     <>
//       <div
//         id="nav-div"
//         className={isScrolled || currentPath !== "/" ? "scrolled" : ""}
//       >
//         <nav
//           style={isScrolled || currentPath !== "/" ? { color: "#da0e29" } : {}}
//         >
//           <Link
//             onClick={() => {
//               setdropdownDisplay(false);
//             }}
//             to="/"
//             id="span-logo"
//           >
//             <img src={logo} alt="Logo" />
//           </Link>

//           <Accordion
//             isBurgerActive={isBurgerActive}
//             isPhone={isPhone}
//             setisBurgerActive={setisBurgerActive}
//             setisPhone={setisBurgerActive}
//           />

//           <div className="div-link-section">
//             <div
//               className="upper-div"
//               style={
//                 isScrolled || currentPath !== "/"
//                   ? { borderBottom: "3px solid #da0e29" }
//                   : {}
//               }
//             >
//               <Link
//                 to="/contactus"
//                 style={
//                   isScrolled || currentPath !== "/" ? { color: "#da0e29" } : {}
//                 }
//               >
//                 Contact Us
//               </Link>
//               <div>
//                 <i className="fa-solid fa-magnifying-glass"></i>
//                 <span>Search</span>{" "}
//               </div>
//               <div>
//                 <i className="fa-solid fa-user"></i> <span>Login</span>{" "}
//               </div>
//             </div>
//             <div className="lower-div">
//               <div
//                 onClick={() => {
//                   handleNavHover(2);
//                   setdropdownDisplay(!dropdownDisplay ? true : true);
//                 }}
//               >
//                 About Us
//                 <i className="fa-solid fa-angle-down"></i>
//               </div>
//               <div
//                 onClick={() => {
//                   handleNavHover(1);
//                   setdropdownDisplay(!dropdownDisplay ? true : true);
//                 }}
//               >
//                 Service
//                 <i className="fa-solid fa-angle-down"></i>
//               </div>
//               <div
//                 onClick={() => {
//                   handleNavHover(3);
//                   setdropdownDisplay(!dropdownDisplay ? true : true);
//                 }}
//               >
//                 SPAN Suite
//                 <i className="fa-solid fa-angle-down"></i>
//               </div>
//               <div
//                 onClick={() => {
//                   handleNavHover(4);
//                   setdropdownDisplay(!dropdownDisplay ? true : true);
//                 }}
//               >
//                 Industries Served
//                 <i className="fa-solid fa-angle-down"></i>
//               </div>
//               <div
//                 onClick={() => {
//                   handleNavHover(5);
//                   setdropdownDisplay(!dropdownDisplay ? true : true);
//                 }}
//               >
//                 Training Programs
//                 <i className="fa-solid fa-angle-down"></i>
//               </div>
//               <div
//                 onClick={() => {
//                   handleNavHover(6);
//                   setdropdownDisplay(!dropdownDisplay ? true : true);
//                 }}
//               >
//                 Resources & Toolkits
//                 <i className="fa-solid fa-angle-down"></i>
//               </div>
//             </div>
//           </div>
//           <div
//             className="burger"
//             onClick={() => {
//               setisBurgerActive(!isBurgerActive);
//             }}
//           >
//             <div
//               className="top"
//               style={
//                 isBurgerActive
//                   ? { transform: "rotate(45deg) translateY(8px)" }
//                   : { transform: "rotate(0deg) translateY(0%)" }
//               }
//             ></div>
//             <div
//               className="middle"
//               style={
//                 isBurgerActive
//                   ? { transform: "translateX(500%)" }
//                   : { transform: "translateX(0%)" }
//               }
//             ></div>
//             <div
//               className="bottom"
//               style={
//                 isBurgerActive
//                   ? { transform: "rotate(-45deg) translateY(-8px)" }
//                   : { transform: "rotate(0deg) translateY(0%)" }
//               }
//             ></div>
//           </div>
//         </nav>
//       </div>
//       <div
//         id="dropdown"
//         style={dropdownDisplay ? { top: "17vh" } : { top: "-100vh" }}
//       >
//         {dropdownContent}
//         {isServiceOn && (
//           <ul style={isServiceOn ? { right: "3%" } : { right: "37%" }}>
//             {servicedropdownContent}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;

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
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/spansuit/mobileappview"
        >
          Mobile APP
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/spansuit/brandprotection"
        >
          Brand Protection
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
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/industries/successtory"
        >
          {" "}
          Success Stories/ Case Studies /Testimonials
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
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/whitepaper"
        >
          {" "}
          Whitepapers
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/casestudy"
        >
          {" "}
          Case Studies
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/resources/brandprotection"
        >
          {" "}
          Brand Protection Toolkits{" "}
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
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/about/directorsmessage"
        >
          {" "}
          Directors message
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/missionvisionvalues"
        >
          {" "}
          Mission, Vision and Values
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/valuesandexpectations"
        >
          {" "}
          Value Creation
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/fundingmodels"
        >
          {" "}
          Funding Model
        </Link>

        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/strategy"
        >
          Strategy
        </Link>

        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/capability"
        >
          {" "}
          Capability
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/bestpractices"
        >
          {" "}
          Best Practices{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/leadershipteam"
        >
          {" "}
          Leadership Team
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/organisationstructure"
        >
          {" "}
          Organisation Structure{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/rolesandresponsibility"
        >
          {" "}
          Roles and Responsibilities{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/governance"
        >
          {" "}
          Governance (Advisory Board)
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/partnerships"
        >
          {" "}
          Partnerships{" "}
        </Link>
        <Link
          onClick={() => {
            setdropdownDisplay(false);
          }}
          to="/aboutus/offices"
        >
          {" "}
          Offices (Singapore, India, Bangladesh)
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
            currentServiceDd === 1 && serviveddDisplay === true
              ? setserviveddDisplay(false)
              : setserviveddDisplay(true);
          }}
        >
          Legal Brand Protection
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(2);
            currentServiceDd === 2 && serviveddDisplay === true
              ? setserviveddDisplay(false)
              : setserviveddDisplay(true);
          }}
        >
          Strategic Consulting
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(3);
            currentServiceDd === 3 && serviveddDisplay === true
              ? setserviveddDisplay(false)
              : setserviveddDisplay(true);
          }}
        >
          Investigations & Due Diligence
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(4);
            currentServiceDd === 4 && serviveddDisplay === true
              ? setserviveddDisplay(false)
              : setserviveddDisplay(true);
          }}
        >
          Training
          <i className="fa-solid fa-arrow-right-long"></i>
        </span>
        <span
          onClick={() => {
            handleServiceNavHover(5);
            currentServiceDd === 5 && serviveddDisplay === true
              ? setserviveddDisplay(false)
              : setserviveddDisplay(true);
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
        <h3>
          {" "}
          <i
            className="fa-solid fa-angle-left"
            onClick={() => {
              setserviveddDisplay(false);
            }}
          ></i>
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
          Intellectual Property (Trademarks, Copyrights, Patents, Designs){" "}
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
        <h3>
          {" "}
          <i
            className="fa-solid fa-angle-left"
            onClick={() => {
              setserviveddDisplay(false);
            }}
          ></i>
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
        <h3>
          {" "}
          <i
            className="fa-solid fa-angle-left"
            onClick={() => {
              setserviveddDisplay(false);
            }}
          ></i>
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
          Market Research (Primary and Secondary)
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
        <h3>
          {" "}
          <i
            className="fa-solid fa-angle-left"
            onClick={() => {
              setserviveddDisplay(false);
            }}
          ></i>
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
        <h3>
          {" "}
          <i
            className="fa-solid fa-angle-left"
            onClick={() => {
              setserviveddDisplay(false);
            }}
          ></i>
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
        break;
      case 2:
        setDropdownContent(<ServicesDropdown />);
        setcurrentDd(2);
        setserviveddDisplay(false);

        break;
      case 3:
        setDropdownContent(<IndustriesServedDropdown />);
        setcurrentDd(3);
        setserviveddDisplay(false);

        break;
      case 4:
        setDropdownContent(<ResourcesToolkitsDropdown />);
        setcurrentDd(4);
        setserviveddDisplay(false);

        break;
      case 5:
        setDropdownContent(<AboutUsDropdown />);
        setcurrentDd(5);
        setserviveddDisplay(false);

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
              currentDd === 1 && dropdownDisplay == true
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
            Span Suit
          </span>
          <span
            style={
              currentDd === 2 && dropdownDisplay == true
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
          <span
            style={
              currentDd === 3 && dropdownDisplay == true
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
              currentDd === 4 && dropdownDisplay == true
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
              currentDd === 5 && dropdownDisplay == true
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
          <Link
            style={isScrolled ? { color: "#da0e29" } : { color: "black" }}
            onClick={() => {
              setdropdownDisplay(false);
            }}
            to="/contactus"
          >
            Contact Us
          </Link>
        </div>
        <div id="other-links">
          <Link
            style={isScrolled ? { color: "#da0e29" } : { color: "black" }}
            to="/"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            Search
          </Link>
          <Link
            style={isScrolled ? { color: "#da0e29" } : { color: "black" }}
            to="/"
          >
            <i className="fa-solid fa-user"></i>Login
          </Link>
        </div>
      </nav>
      <div
        id="dropdown"
        style={dropdownDisplay ? { top: "10vh" } : { top: "-100vh" }}
      >
        {dropdownContent}
        <ul
          className="level2dd"
          style={serviveddDisplay ? { left: "67%" } : { left: "33%" }}
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
