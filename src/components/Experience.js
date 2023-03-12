import React from "react";
import gHome from "../assets/gourmandize-home.gif";
import gAbout from "../assets/gourmandize-about.gif";
import gReview from "../assets/gourmandize-review.gif";

const Experience = () => {
  const gourmandizeArr = [gHome, gAbout, gReview];
  return (
    <>
      <div className="w-screen flex justify-center items-center flex-wrap">
        {gourmandizeArr.map((image, index) => {
          return (
            <div className="h-80 w-80 object-contain m-10">
              <img src={image} key={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
