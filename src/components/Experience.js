import React from "react";
import gHome from "../assets/gourmandize-home.gif";
import gAbout from "../assets/gourmandize-about.gif";
import gReview from "../assets/gourmandize-review.gif";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { DiRubyRough } from "react-icons/di";
import { SiRubyonrails, SiSass, SiJest } from "react-icons/si";
import rspeclogo from "../assets/rspeclogo.svg";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const gourmandizeArr = [gHome, gAbout, gReview];
  const weatherArr = [];

  const navigate = useNavigate();
  const toGourmandize = () => {
    navigate("https://gourmandize-e0kd.onrender.com/");
  };

  return (
    <>
      <main className="mt-8 h-auto">
        <h2 className="text-namewhite mb-12 ml-48 text-xl">
          See some recent works:
        </h2>
        <section>
          <h3 className="text-yellow-400 text-xl flex items-center gap-3 ml-48 lg:ml-32 mb-8">
            Gourmandize
            <span className="text-namewhite text-2xl">
              <FaReact />
            </span>
            <span className="text-namewhite text-2xl">
              <DiRubyRough />
            </span>
            <span className="text-namewhite text-2xl">
              <SiRubyonrails />
            </span>
            <span className="text-namewhite text-2xl">
              <FaHtml5 />
            </span>
            <span className="text-namewhite text-2xl">
              <SiSass />
            </span>
            <span className="text-namewhite text-2xl">
              <SiJest />
            </span>
            <span className="text-namewhite text-2xl">
              <img className="h-5" src={rspeclogo} />
            </span>
          </h3>

          <div className="w-screen flex lg:flex-row justify-center items-center flex-col mb-10">
            {gourmandizeArr.map((image, index) => {
              return (
                <div className="h-auto w-80 object-contain mx-10 mb-8 gap-neg shadow-gifshadow">
                  <a
                    href="https://gourmandize-e0kd.onrender.com/"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer hover:opacity-30"
                      src={image}
                      key={index}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-yellow-400 text-xl flex items-center gap-3 ml-48 lg:ml-32 mb-8">
            Weather App (Coming Soon!)
            <span className="text-namewhite text-2xl">
              <FaReact />
            </span>
            <span className="text-namewhite text-2xl">
              <DiRubyRough />
            </span>
            <span className="text-namewhite text-2xl">
              <SiRubyonrails />
            </span>
            <span className="text-namewhite text-2xl">
              <FaHtml5 />
            </span>
            <span className="text-namewhite text-2xl">
              <SiSass />
            </span>
            <span className="text-namewhite text-2xl">
              <SiJest />
            </span>
            <span className="text-namewhite text-2xl">
              <img className="h-5" src={rspeclogo} />
            </span>
          </h3>
          <div className="w-screen flex lg:flex-row justify-center items-center flex-col mb-10">
            {gourmandizeArr.map((image, index) => {
              return (
                <div className="h-auto w-80 object-contain mx-10 mb-8 gap-neg shadow-gifshadow">
                  <a
                    href="https://gourmandize-e0kd.onrender.com/"
                    target="_blank"
                  >
                    <img
                      className="cursor-pointer hover:opacity-30"
                      src={image}
                      key={index}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Experience;
