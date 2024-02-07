import React, { useRef, useEffect } from "react";
import jsonData from "../JSON Data/resources.json";
import { useParams } from "react-router-dom";

function Resources() {
  const { section } = useParams();
  const sectionData = jsonData[section];
  // const contentRef = useRef([]);

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: "0px",
  //     threshold: 0.5,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.style.transition = "transform 1s ease";
  //         entry.target.style.transform = "translateX(0)";
  //       } else {
  //         entry.target.style.transition = "transform 0s";
  //         entry.target.style.transform = "translateX(10em)";
  //       }
  //     });
  //   }, options);

  //   contentRef.current.forEach((ref) => {
  //     observer.observe(ref);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  if (!sectionData || !sectionData.contents) {
    return <div>Data not found or invalid format</div>;
  }

  return (
    <>
      <div className="template">
        <div className="templatebrd resourcebg">
          <h2>{sectionData.breadCrumb}</h2>
          <h1>
            {sectionData.breadCrumb
              .split(">")
              .map((item) => item.trim())
              .pop()}
          </h1>
        </div>
        <div className="templatecontent">
          {sectionData.contents.map((element, index) => (
            <React.Fragment key={index}>
              {element.tag === "img" ? (
                <img
                  // ref={(el) => (contentRef.current[index] = el)}
                  src={element.src}
                  alt={element.alt || ""}
                />
              ) : element.tag === "ul" ? (
                <ul
                // ref={(el) => (contentRef.current[index] = el)}
                >
                  {element["list-items"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : element.tag === "ol" ? (
                <ol
                // ref={(el) => (contentRef.current[index] = el)}
                >
                  {element["list-items"].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ol>
              ) : (
                React.createElement(
                  element.tag,
                  {
                    key: index,
                    // ref: (el) => (contentRef.current[index] = el),
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
