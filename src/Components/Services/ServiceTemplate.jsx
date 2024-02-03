import React from "react";
import Navbar from "../Navbar";
import "./Services.css";
import jsonData from "./Data.json";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const ServiceTemplate = () => {
  const renderElement = (element, index) => {
    if (element.tag === "ol" || element.tag === "ul") {
      return (
        <element.tag key={index}>
          {element["list-items"].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </element.tag>
      );
    } else if (element.tag === "img") {
      return <img key={index} src={element.src} alt="" />;
    } else {
      return React.createElement(element.tag, { key: index }, element.content);
    }
  };

  const { id } = useParams();

  const sectionData = jsonData[id];

  if (!sectionData || !sectionData.content) {
    // Handle the case where the section data or content is not found or not an array
    return <div>Section or content not found</div>;
  }

  return (
    <>
      <Navbar />
      <div id="ServiceTemplate">
        <div
          id="services-breadcrumb"
          style={{
            background: `url(${sectionData.img})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
        >
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split(">")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div>
          {sectionData.content.map((element, index) =>
            renderElement(element, index)
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceTemplate;
