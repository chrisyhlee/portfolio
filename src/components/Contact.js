import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"

const Contact = () => {
  return (
    <>
      <main className="w-full">
        <h1 className="text-namewhite text-xl font-semibold text-center lg:text-left lg:ml-48 mb-10">Click a link to connect!</h1>
        <section className="flex flex-wrap justify-center">
          <a href="mailto:leechr8393@gmail.com" className="text-namewhite h-32 w-32 cursor-pointer">
            <HiOutlineMail size={50} />
          </a>
          <a href="https://www.linkedin.com/in/chrisyhlee/" target="_blank" className="text-namewhite h-32 w-32 cursor-pointer">
            <FaLinkedin size={50} />
          </a>
          <a href="https://github.com/chrisyhlee" target="_blank" className="text-namewhite h-32 w-32 cursor-pointer">
            <FaGithub size={50} />
          </a>
        </section>
      </main>
    </>
  );
};

export default Contact;
