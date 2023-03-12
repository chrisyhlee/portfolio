import React from "react";

const WelcomePage = () => {
  return (
    <>
      <div className="w-screen flex justify-center mb-32">
        <div className="w-2/3 lg:w-big flex h-screen justify-center items-center">
          <div className="flex flex-col gap-10 justify-center items-center">
            <div className="mt-28 text-left w-full">
              <h4 className="text-myteal text-lg px-3">Hello! My name is</h4>
            </div>

            <h1 className="text-namewhite text-5xl lg:text-7xl text-left w-full px-8">
              Chris Lee.
            </h1>
            <h1 className="text-darkerwhite text-3xl lg:text-5xl text-left w-full px-16">
              Full Stack Developer.
            </h1>
            <p className="text-myteal w-full text-left text-lg lg:w-70p lg:px-0 px-16">
              Currently part of the Hotel 2022 cohort at LEARN Academy learning
              the foundations of becoming a full-stack web developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage