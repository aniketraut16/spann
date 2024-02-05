import React, { useState } from "react";
import bg1 from "../Images/S.jpeg";
import bg2 from "../Images/P.jpeg";
import bg3 from "../Images/A.jpeg";
import bg4 from "../Images/N.jpeg";

function OurIntroduction() {
  const [title, settitle] = useState("Strategic");
  const [info, setinfo] = useState(
    " 'Strategic' represents our core competence in providing strategic guidance and innovative solutions to our clients. We excel in developing comprehensive strategies that align with their long-term objectives and navigating the complexities of their challenges."
  );
  const [currbg, setcurrbg] = useState(bg1);
  const [nav1active, setnav1active] = useState(true);
  const [nav2active, setnav2active] = useState(false);
  const [nav3active, setnav3active] = useState(false);
  const [nav4active, setnav4active] = useState(false);
  return (
    <div
      id="OurIntroduction"
      style={{
        background: `url(${currbg}) no-repeat center center / cover`,
      }}
    >
      <div className="info-tab">
        <h2>
          <i className="fa-solid fa-droplet"></i>
          {"  "}OUR INTRODUCTION
        </h2>
        <h1>{title}</h1>
        <p>{info}</p>
      </div>

      <ul className="intro-nav">
        <li
          style={
            nav1active
              ? {
                  fontSize: "1.15em",
                  borderBottom: "4px solid #be9244",
                }
              : {}
          }
          onMouseEnter={() => {
            setcurrbg(bg1);
            settitle("Strategic");
            setinfo(
              " 'Strategic' represents our core competence in providing strategic guidance and innovative solutions to our clients. We excel in developing comprehensive strategies that align with their long-term objectives and navigating the complexities of their challenges."
            );
            setnav1active(true);
            setnav2active(false);
            setnav3active(false);
            setnav4active(false);
          }}
        >
          Strategic
        </li>
        <li
          style={
            nav2active
              ? {
                  fontSize: "1.15em",
                  borderBottom: "4px solid #be9244",
                }
              : {}
          }
          onMouseEnter={() => {
            setcurrbg(bg2);
            settitle("Partner");
            setinfo(
              "'Partner' signifies our commitment to building strong, collaborative, and enduring relationships with our clients. We don't just advise; we become trusted partners invested in our clients' success."
            );
            setnav1active(false);
            setnav2active(true);
            setnav3active(false);
            setnav4active(false);
          }}
        >
          Partner
        </li>

        <li
          style={
            nav3active
              ? {
                  fontSize: "1.15em",
                  borderBottom: "4px solid #be9244",
                }
              : {}
          }
          onMouseEnter={() => {
            setcurrbg(bg3);
            settitle("Advanced");
            setinfo(
              "'Advanced' embodies our dedication to staying at the forefront of industry advancements and innovation. We continually seek new approaches and technologies to deliver cutting-edge solutions."
            );

            setnav1active(false);
            setnav2active(false);
            setnav3active(true);
            setnav4active(false);
          }}
        >
          Advanced
        </li>
        <li
          style={
            nav4active
              ? {
                  fontSize: "1.15em",
                  borderBottom: "4px solid #be9244",
                }
              : {}
          }
          onMouseEnter={() => {
            setcurrbg(bg4);
            settitle("Navigation");
            setinfo(
              " 'Navigation' symbolizes our role in helping clients navigate the intricate landscapes of their industries and markets. We guide them toward their goals with precision and expertise."
            );
            setnav1active(false);
            setnav2active(false);
            setnav3active(false);
            setnav4active(true);
          }}
        >
          Native
        </li>
      </ul>
    </div>
  );
}

export default OurIntroduction;
