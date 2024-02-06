import React, { useRef, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import jsonData from "./ServicesData.json";
import { useParams } from "react-router-dom";

const ServiceTemplate = () => {
  const { section, subsection } = useParams();
  const sectionData = jsonData[section][subsection];
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
  //         entry.target.style.transform = "translateX(8em)";
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

  const renderElement = (element, index) => {
    if (element.tag === "ol" || element.tag === "ul") {
      return (
        <element.tag
          key={index}
          // ref={(el) => (contentRef.current[index] = el)}
        >
          {element["list-items"].map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </element.tag>
      );
    } else if (element.tag === "img") {
      return (
        <img
          key={index}
          // ref={(el) => (contentRef.current[index] = el)}
          src={element.src}
          alt=""
        />
      );
    } else {
      return React.createElement(
        element.tag,
        {
          key: index,
          // ref: (el) => (contentRef.current[index] = el),
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
      <Navbar />
      <div id="ServiceTemplate">
        <div
          id="services-breadcrumb"
          style={{
            background: `url(${sectionData.img}) no-repeat center center / cover`,
            backgroundAttachment: "fixed",
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
