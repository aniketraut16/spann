import React from "react";
import data from "./JSON Data/AboutUsData.json";

function Partnership() {
  const onecard = (ele) => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={ele.src} alt="" />
          </div>
          <div className="flip-card-back">
            <p className="title">{ele.content}</p>
            <p>{ele.shortinfo}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="Partnership">
      <div className="templatebrd">
        <h1>PARTNERS</h1>
      </div>
      <div className="partnershipcardsdiv">
        {data["partnerships"].contents.map((imgs, index) =>
          imgs.tag === "img" ? onecard(imgs) : <></>
        )}
      </div>
    </div>
  );
}

export default Partnership;
