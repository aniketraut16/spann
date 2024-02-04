import React from "react";
import img from "../Images/oveview.png";

function OverviewOfSpan() {
  return (
    <div id="overviewOfSpan">
      <div>
        <h1> OVERVIEW OF SPAN CONSULTING</h1>
        <p>
          SPAN Consulting is a premier professional services firm providing
          specialist brand protection, legal, investigations, business risk
          advisory and strategic consulting services to our esteemed clients in
          pan South Asia and SEA, having offices in Singapore, India and
          Bangladesh.{" "}
        </p>
        <p>
          We are experienced and take pride in conducting and providing a
          complete range of services covering IP (Trademarks, Copyrights,
          Patents, and Designs), confidential information & trade secrets,
          healthcare regulatory laws, media, entertainment & sports laws, and
          digital & IT laws including but not limited to (1) IP registration and
          prosecution, (2) audits, (3) product security investigations, and
          enforcement (PSI&E) of rights through civil, criminal, and
          administrative measures thru law enforcement and regulatory agencies
          (4) litigation, (5) comprehensive legal and business risk consulting,
          assessments and developing risk mitigation plans, (6) customs
          recordation of IPR, and (7) LEA, Customs, External and Internal
          stakeholder trainings, (8) supply chain security/integrity programs,
          risk assessments and investigations, etc., (9) market research
          (primary and secondary)
        </p>
        <p>
          We are highly technology driven and have developed several tools,
          toolkits, and modules in-house, be it for brand protection, case
          management, budget management, ROI Calculation, etc.,
        </p>
      </div>
      <img src={img} alt="" />
    </div>
  );
}

export default OverviewOfSpan;
