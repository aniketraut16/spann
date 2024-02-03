import React from "react";

function Footer() {
  return (
    <div id="Footer">
      <div id="footer-div1">
        <h2>SPAN</h2>
        <p>
          SPAN refers to the global organization, and may refer to one or more,
          of the member firms of Ernst & Young Global Limited, each of which is
          a separate legal entity. Ernst & Young Global Limited, a UK company
          limited by guarantee, does not provide services to clients.
        </p>
      </div>
      <div>
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
      </div>
    </div>
  );
}

export default Footer;
