import React, { useRef, useEffect } from "react";
import jsonData from "../JSON Data/AboutUsData.json";

import { useParams } from "react-router-dom";

const TemplateComponent = () => {
  const { section } = useParams();
  const sectionData = jsonData[section];
  // const contentRef = useRef([]);
  // var animationcount = 3;

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
  //         entry.target.style.transform = `translateX(${animationcount}em)`;
  //         if (animationcount !== 0) {
  //           animationcount--;
  //         }
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
                // ref={(el) => (contentRef.current[index] = el)}
                src={element.src}
                alt={element.alt || ""}
              />
            ) : (
              React.createElement(
                element.tag,
                {
                  key: index,
                  // ref: (el) => (contentRef.current[index] = el),
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
