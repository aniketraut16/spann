import React from "react";
import { Link } from "react-router-dom";

function Accordion() {
  return (
    <div id="Accordion">
      <div id="mainaccordianlinks">
        <span> Span Suit </span>
        <span> Services </span>
        <span> Industries </span>
        <span> Resources and Toolkits </span>
        <span> About Us </span>
        <Link to="/contactus"> Contact Us</Link>
      </div>
    </div>
  );
}

export default Accordion;
