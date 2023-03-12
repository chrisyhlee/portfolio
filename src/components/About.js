import React from "react";
import profilepicture from "../assets/profilepicture.png";
import { FaCheckSquare } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="h-auto w-screen flex flex-col justify-center mb-36 items-center">
        <div className="flex flex-col lg:flex-row justify-around h-auto">
          <div>
            <p className="text-namewhite text-lg w-1/2 text-left ml-48 mt-8">
              Welcome to my portfolio! My name is Chris and I have a passion of
              learning and growing every day! Web development has a unique way
              of testing this passion by constantly presenting brand new ideas
              and challenges to conquer.
            </p>
            <br></br>
            <p className="text-namewhite text-lg w-1/2 text-left ml-48">
              I am currently a full time student at LEARN Academy, part of the
              Hotel 2022 cohort, which is an intensive, accelerated, 16 week,
              full stack development bootcamp. Before getting into development,
              I was a healthcare specialist (medic) in the U.S Army, serving on
              active duty in the 82nd Airborne Division. I then decided to go
              back to college in the medical field for a couple years, but
              realized I did not enjoy it enough to make it a career. Before I
              knew it, I found myself beginning my journey in development at
              LEARN Academy and have not looked back since!
            </p>
            <br></br>
          </div>
          <div className="flex justify-center lg:mr-48">
            <div
              className="h-80 w-40 lg:h-96 lg:w-56 lg:mt-8 bg-cover bg-no-repeat rounded-3xl shadow-picshadow"
              style={{ backgroundImage: "url(" + profilepicture + ")" }}
            ></div>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-myteal text-left ml-48 text-lg font-semibold mt-10">Tech Stack:</h2>
        </div>

        <div className="text-namewhite w-full text-left flex mt-5 mb-30">
          <ul className="text-namewhite text-lg ml-48">
            <li>
              <span></span>
              JavaScript
            </li>
            <li>Ruby</li>
            <li>SQL</li>
            <li>HTML / CSS</li>
          </ul>
          <ul className="text-namewhite text-lg ml-48">
            <li>React</li>
            <li>Rails</li>
            <li>JEST</li>
            <li>RSpec</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
