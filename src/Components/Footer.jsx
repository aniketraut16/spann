import React from "react";

function Footer() {
  return (
    <div id="Footer">
      <div id="footer-div1">
        <h2>SPAN</h2>
        <p>
          SPAN Focuses on meticulous audits to strategic tax planning and
          insightful consulting, we pave the way for your financial success with
          precision and expertise.
        </p>
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
          <span> 46 Kim Yam Road, #01-06 The Herencia, SINGAPORE - 239351</span>
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
  );
}

export default Footer;
