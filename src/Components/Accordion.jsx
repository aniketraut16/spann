import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Accordion({ isBurgerActive, isPhone, setisBurgerActive, setisPhone }) {
  useEffect(() => {
    const accordionBtns = document.querySelectorAll(".accordion");
    accordionBtns.forEach((accordion) => {
      accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;

        if (content.style.maxHeight) {
          //this is if the accordion is open
          content.style.maxHeight = null;
        } else {
          //if the accordion is currently closed
          content.style.maxHeight = content.scrollHeight + "px";
        }
      };
    });
  }, []);

  return (
    <div
      className="container"
      style={
        isPhone ? (isBurgerActive ? { right: "0px" } : { right: "-100%" }) : {}
      }
    >
      <button className="accordion">About Us</button>
      <div className="accordion-content">
        <p>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/history"
          >
            {" "}
            History
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/about/directorsmessage"
          >
            {" "}
            Directors message
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/missionvisionvalues"
          >
            {" "}
            Mission, Vision and Values
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/valuesandexpectations"
          >
            {" "}
            Value Creation
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/fundingmodels"
          >
            {" "}
            Funding Model
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/strategy"
          >
            Strategy
          </Link>

          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/capability"
          >
            {" "}
            Capability
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/bestpractices"
          >
            {" "}
            Best Practices{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/leadershipteam"
          >
            {" "}
            Leadership Team
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/organisationstructure"
          >
            {" "}
            Organisation Structure{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/rolesandresponsibility"
          >
            {" "}
            Roles and Responsibilities{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/governance"
          >
            {" "}
            Governance (Advisory Board)
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/partnerships"
          >
            {" "}
            Partnerships{" "}
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/aboutus/offices"
          >
            {" "}
            Offices (Singapore, India, Bangladesh)
          </Link>
        </p>
      </div>
      <button className="accordion">Services</button>
      <div className="accordion-content">
        <p>
          <ul>
            <li>Legal Brand Protection</li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/overview"
            >
              {" "}
              Overview{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/ipregistration"
            >
              {" "}
              IP Registration and Prosecution{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/ipaudits"
            >
              {" "}
              IP Audits, SC Audits, EM Audit, Security Audits{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/intellectualproperties"
            >
              {" "}
              Intellectual Property (Trademarks, Copyrights, Patents, Designs){" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/confidentialinformation"
            >
              {" "}
              Confidential Information and Trade Secrets{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/healthcareandregulations"
            >
              {" "}
              Healthcare and Regulatory Laws{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/mediaentertainmentandsportslaws"
            >
              {" "}
              Media, Entertainment & Sports Laws{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/leagalbrandprotection/digitalanditlaw"
            >
              {" "}
              Digital & IT Laws{" "}
            </Link>
          </ul>
          <ul>
            <li>Strategic Consulting</li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/stratagicconsulting/overview"
            >
              Overview{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/stratagicconsulting/comprehensivelegalandbusinessriskconsultancy"
            >
              Comprehensive Legal and Business Risk Consulting{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/stratagicconsulting/riskassesmentandmigrationplan"
            >
              Risk Assessments and Mitigation Plans{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/stratagicconsulting/customizedconsultingservice"
            >
              Customized Consulting Services{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/stratagicconsulting/chainsupplysecurityandintegratityprogram"
            >
              Supply Chain Security/Integrity Programs{" "}
            </Link>
          </ul>
          <ul>
            <li>Investigations & Due Diligence </li>
            <ul>
              <li>Product Security Investigations and Enforcement (PSI&E) </li>
              <Link
                onClick={() => {
                  setisBurgerActive(false);
                }}
                to="/services/investigationandduedilligence/counterfeit"
              >
                Counterfeits
              </Link>
              <Link
                onClick={() => {
                  setisBurgerActive(false);
                }}
                to="/services/investigationandduedilligence/diversion"
              >
                Diversion
              </Link>
              <Link
                onClick={() => {
                  setisBurgerActive(false);
                }}
                to="/services/investigationandduedilligence/producttampering"
              >
                Product Tampering{" "}
              </Link>
            </ul>
          </ul>

          <ul>
            <li>Due Diligence</li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/counterpartyduediligence"
            >
              Counter Party Due Diligence{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/seniormanagementduediligence"
            >
              Senior Management Due Diligence{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/integrityduediligence"
            >
              Integrity Due Diligence{" "}
            </Link>
          </ul>
          <ul>
            <li>Theft Investigations </li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/facility"
            >
              Facility
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/intransit"
            >
              {" "}
              In-Transit{" "}
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/digital"
            >
              {" "}
              Digital{" "}
            </Link>
          </ul>
          <ul>
            <li>KYC and Background Checks </li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/aml"
            >
              AML
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/kyc"
            >
              KYC
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/marketresearch"
            >
              Market Research (Primary and Secondary)
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/marketintelligence"
            >
              Market Intelligence Gathering{" "}
            </Link>
          </ul>

          <ul>
            <li>Forensic Due Diligence</li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/investigationandduedilligence/cyberforensics"
            >
              Cyber Forensics
            </Link>
          </ul>

          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/services/investigationandduedilligence/informationsecurityandsystem"
          >
            Information Security and Systems{" "}
          </Link>
          <ul>
            <li>Supply Chain Investigations </li>
            <ul>
              <Link
                onClick={() => {
                  setisBurgerActive(false);
                }}
                to="/services/investigationandduedilligence/sourceinvestigation"
              >
                Source Investigations{" "}
              </Link>
            </ul>
          </ul>
          <ul>
            <li>Tranings </li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/traning/mlc"
            >
              MLC
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/traning/iprinschool"
            >
              IPR in Schools
            </Link>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/traning/softskills"
            >
              Soft Skills{" "}
            </Link>
          </ul>

          <ul>
            <li>Services for the Legal Industry </li>
            <Link
              onClick={() => {
                setisBurgerActive(false);
              }}
              to="/services/serviceforlegalindustries/tminuse"
            >
              TM In-Use
            </Link>
          </ul>
        </p>
      </div>
      <button className="accordion">SPAN Suit</button>
      <div className="accordion-content">
        <p>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/spansuit/systemprocessandtools"
          >
            Systems, Processes and Tools
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/spansuit/mobileappview"
          >
            Mobile APP
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/spansuit/brandprotection"
          >
            Brand Protection
          </Link>
        </p>
      </div>
      <button className="accordion">Industries Served</button>
      <div className="accordion-content">
        <p>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/industries/overviewofindustries"
          >
            {" "}
            Overview of Industries
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/industries/successtory"
          >
            {" "}
            Success Stories/ Case Studies /Testimonials
          </Link>
        </p>
      </div>
      <button className="accordion">Traning Programs</button>
      <div className="accordion-content">
        <p>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/traning/overview"
          >
            {" "}
            Overview
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/traning/lawenforcementagenciestraining"
          >
            {" "}
            Law Enforcement Agencies (LEA) Training
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/traning/customtraning"
          >
            {" "}
            Customs Training
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/traning/externalandinternalstackholdertraning"
          >
            {" "}
            External and Internal Stakeholder Training
          </Link>
        </p>
      </div>
      <button className="accordion">Resources and Toolkits</button>
      <div className="accordion-content">
        <p>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/resources/blogs"
          >
            {" "}
            Blog/Articles/ Videos
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/resources/whitepaper"
          >
            {" "}
            Whitepapers
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/resources/casestudy"
          >
            {" "}
            Case Studies
          </Link>
          <Link
            onClick={() => {
              setisBurgerActive(false);
            }}
            to="/resources/brandprotection"
          >
            {" "}
            Brand Protection Toolkits{" "}
          </Link>
        </p>
      </div>
      <button className="accordioni">
        <Link
          onClick={() => {
            setisBurgerActive(false);
          }}
          to="/contactus"
        >
          Contact Us
        </Link>
      </button>
      <button className="accordioni">
        <span>Search</span>
      </button>
      <button className="accordioni">
        <span>Login</span>
      </button>
    </div>
  );
}

export default Accordion;
