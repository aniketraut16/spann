import React from "react";
import jsonData from "./spanjson.json";
import Navbar from "../Navbar";
import Footer from "../Footer";
const SpanSuit = () => {
  const sectionData = jsonData;
  if (!sectionData || !sectionData.contents) {
    return <div>Data not found or invalid format</div>;
  }

  return (
    <>
      <Navbar white={true} />
      <div className="spanus">
        <div className="spanusbrd">
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split(">")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div className="span-uscountent">
          {sectionData.contents.map((element, index) => (
            <React.Fragment key={index}>
              {element.tag === "img" ? (
                <img src={element.src} alt={element.alt || ""} />
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
                  { key: index },
                  element.content
                )
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpanSuit;
