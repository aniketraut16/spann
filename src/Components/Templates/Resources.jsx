import React from "react";
import jsonData from "../JSON Data/resources.json";
import { useParams } from "react-router-dom";

function Resources() {
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
        <div className="templatebrd resourcebg">
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split("/")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div className="templatecontent">
          {sectionData.contents.map((element, index) => (
            <React.Fragment key={index}>
              {element.tag === "img" ? (
                <img
                  src={process.env.PUBLIC_URL + element.src}
                  alt={element.alt || ""}
                />
              ) : element.tag === "ul" ? (
                <ul>
                  {element["list-items"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : element.tag === "ol" ? (
                <ol>
                  {element["list-items"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                React.createElement(
                  element.tag,
                  {
                    key: index,
                  },
                  element.content
                )
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Resources;
