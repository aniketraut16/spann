import React, { useEffect, useRef } from "react";
import jsonData from "../JSON Data/industrydata.json";
import { useParams } from "react-router-dom";

function Industries() {
  const { section } = useParams();
  const sectionData = jsonData[section];
  const observedElements = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "1";
          } else {
            entry.target.style.transform = "scale(0.95)";
            entry.target.style.opacity = "0";
          }
        });
      },
      { threshold: 0.1 }
    );

    observedElements.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (!sectionData || !sectionData.contents) {
    return <div>Data not found or invalid format</div>;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  return (
    <>
      <div className="template ">
        <div className="templatebrd industry-brd">
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
                  src={element.src}
                  alt={element.alt || ""}
                  ref={(el) => {
                    if (el) {
                      observedElements.current.push(el);
                    }
                  }}
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
                    ref: (el) => {
                      if (el) {
                        observedElements.current.push(el);
                      }
                    },
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

export default Industries;
