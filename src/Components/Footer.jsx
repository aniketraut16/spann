import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div id="Footer">
      <div id="upper-footer-div">
        <div id="footer-div1">
          <span>
            <span id="footer-span">SPAN</span>
            {"     "}
            <span id="footer-consultancy">CONSULTING</span>
          </span>
          <p>
            <h3>India:</h3>
            <span>
              {" "}
              Office No. 516, Dwarka City Centre, Sector 12, Dwarka,New Delhi
              110075, INDIA
            </span>
          </p>
          <p>
            <h3>Singapore:</h3>
            <span>
              {" "}
              46 Kim Yam Road, #01-06 The Herencia, SINGAPORE - 239351
            </span>
          </p>
          <p>
            <h3>India - 2:</h3>
            <span>
              {" "}
              902, Embassy Centre, Jamnalal Bajaj Road, Nariman Point,Mumbai
              400021, INDIA
            </span>
          </p>
          <p>
            <h3>Bangladesh</h3>
            <span>
              {" "}
              DARUS SALAM ARCADE (3rd Floor) 14, Purana Paltan, Dhaka -1000,
              BANGLADESH{" "}
            </span>
          </p>
        </div>
        <div id="footer-div2">
          <ul>
            <li>Connect with us</li>
            <li>Articles</li>
            <li>Industries</li>
            <li>Legal and Privacy</li>
          </ul>
          <ul>
            <a href="#">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="#">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </ul>
          <p>&copy; 2024 All rights reserved to Span Consulting™</p>
        </div>
      </div>
      <div id="lower-footer-div">
        <h4>About Us</h4>
        <div>
          <Link to="/aboutus/history"> History</Link>
          <Link to="/about/directorsmessage"> Directors message</Link>
          <Link to="/aboutus/missionvisionvalues">
            {" "}
            Mission, Vision and Values
          </Link>
          <Link to="/aboutus/valuesandexpectations"> Value Creation</Link>
          <Link to="/aboutus/fundingmodels"> Funding Model</Link>

          <Link to="/aboutus/strategy">Strategy</Link>

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
          {/* <Link to="/aboutus/partnerships"> Partnerships </Link> */}
          <Link to="/aboutus/offices">
            {" "}
            Offices (Singapore, India, Bangladesh)
          </Link>
        </div>
        <h4>SPAN Suite</h4>
        <div>
          <Link to="/spansuit/systemprocessandtools">
            Systems, Processes and Tools
          </Link>
          <Link to="/spansuit/mobileappview">Mobile APP</Link>
          <Link to="/spansuit/brandprotection">Brand Protection</Link>
        </div>
        <h4>Industries Served</h4>
        <div>
          <Link to="/industries/overviewofindustries">
            {" "}
            Overview of Industries
          </Link>
          <Link to="/industries/successtory">
            {" "}
            Success Stories/ Case Studies /Testimonials
          </Link>
        </div>
        <h4>Traning Programs</h4>
        <div>
          <Link to="/traning/overview"> Overview</Link>
          <Link to="/traning/lawenforcementagenciestraining">
            {" "}
            Law Enforcement Agencies (LEA) Training
          </Link>
          <Link to="/traning/customtraning"> Customs Training</Link>
          <Link to="/traning/externalandinternalstackholdertraning">
            {" "}
            External and Internal Stakeholder Training
          </Link>
        </div>
        <h4>Resources and Toolkits</h4>
        <div>
          <Link to="/resources/blogs"> Blog/Articles/ Videos</Link>
          <Link to="/resources/whitepaper"> Whitepapers</Link>
          <Link to="/resources/casestudy"> Case Studies</Link>
          <Link to="/resources/brandprotection">
            {" "}
            Brand Protection Toolkits{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
