import React from "react";
import jsonData from "../JSON Data/ServicesData.json";
import { useParams } from "react-router-dom";

const ServiceTemplate = () => {
  const { section, subsection } = useParams();
  const sectionData = jsonData[section][subsection];

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
      return React.createElement(
        element.tag,
        {
          key: index,
        },
        element.content
      );
    }
  };

  if (!sectionData || !sectionData.content) {
    return <div>Section or content not found</div>;
  }

  return (
    <>
      <div className="template ">
        <div className="templatebrd">
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split("/")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div className="templatecontent">
          {sectionData.content.map((element, index) =>
            renderElement(element, index)
          )}
        </div>
      </div>
    </>
  );
};

export default ServiceTemplate;
