import React from "react";
import jsonData from "./AboutUsData.json";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useParams } from "react-router-dom";

const TemplateComponent = () => {
  const { section } = useParams();
  const sectionData = jsonData[section];

  if (!sectionData || !sectionData.contents) {
    return <div>Data not found or invalid format</div>;
  }

  return (
    <>
      <Navbar white={true} />
      <div className="aboutus">
        <div className="navcover"></div>
        <div className="aboutusbrd">
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split(">")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div className="about-uscountent">
          {sectionData.contents.map((element, index) =>
            element.tag === "img" ? (
              <img key={index} src={element.src} alt={element.alt || ""} />
            ) : (
              React.createElement(element.tag, { key: index }, element.content)
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TemplateComponent;
