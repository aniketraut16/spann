import React from "react";
import jsonData from "../JSON Data/AboutUsData.json";

import { useParams } from "react-router-dom";

const TemplateComponent = () => {
  const { section } = useParams();
  const sectionData = jsonData[section];
  if (!sectionData || !sectionData.contents) {
    return <div>Data not found or invalid format</div>;
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <>
      <div className="template">
        <div className="templatebrd aboutusbread">
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split("/")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div className="templatecontent">
          {sectionData.contents.map((element, index) =>
            element.tag === "img" ? (
              <img
                key={index}
                src={process.env.PUBLIC_URL + element.src}
                alt={element.alt || ""}
              />
            ) : (
              React.createElement(
                element.tag,
                {
                  key: index,
                },
                element.content
              )
            )
          )}
        </div>
      </div>
    </>
  );
};

export default TemplateComponent;
