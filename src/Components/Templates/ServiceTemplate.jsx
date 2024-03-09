import React, { useEffect, useRef } from "react";
import jsonData from "../JSON Data/ServicesData.json";
import { useParams } from "react-router-dom";

const ServiceTemplate = () => {
  const { section, subsection } = useParams();
  const sectionData = jsonData[section][subsection];
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

  const renderElement = (element, index) => {
    if (element.tag === "ol" || element.tag === "ul") {
      // Add ul or ol to the list of observed elements
      return React.createElement(
        element.tag,
        {
          key: index,
          ref: (el) => {
            if (el) {
              observedElements.current.push(el);
            }
          },
        },
        element["list-items"].map((item, idx) => <li key={idx}>{item}</li>)
      );
    } else if (
      element.tag === "h2" ||
      element.tag === "p" ||
      element.tag === "td" ||
      element.tag === "tr"
    ) {
      return React.createElement(
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
      );
    } else if (element.tag === "img") {
      return (
        <img
          src={process.env.PUBLIC_URL + element.src}
          alt={element.alt || ""}
          ref={(el) => {
            if (el) {
              observedElements.current.push(el);
            }
          }}
          style={{ transition: "all 500ms ease" }}
        />
      );
    } else if (element.tag === "table") {
      return (
        <table key={index}>
          <thead>
            <tr>
              {element.content[0].map((heading, idx) => (
                <th key={idx}>{heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {element.content.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );
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
