import "./App.css";
import { useRef } from "react";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Experience from "./components/Experience";
import WelcomePage from "./components/WelcomePage";
import Contact from "./components/Contact";
import { FaCaretDown } from "react-icons/fa";
import { useState, useEffect } from "react";

const App = () => {
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);
  const [p1, setP1] = useState(true);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 70,
      behavior: "smooth",
    });
  };

  const next = () => {
    if (p1) {
      scrollToSection(about);
      setP1(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY < 100) {
        setP1(true);
      } else if (window.scrollY > 200) {
        setP1(false);
      }
    });
  }, [window.scrollY]);

  return (
    <>
      <BackToTop />
      <div className="h-12 items-center text-myteal bg-navgrey w-screen flex justify-end fixed top-0 z-10">
        <ul>
          <li
            onClick={() => scrollToSection(about)}
            className="list-none inline md:text-lg font-semibold cursor-pointer mx-4 navLinks text-sm"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(experience)}
            className="list-none inline p-1 md:text-lg font-semibold cursor-pointer mx-4 navLinks text-sm"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection(contact)}
            className="list-none inline p-1 md:text-lg font-semibold cursor-pointer mr-8 ml-4 navLinks text-sm"
          >
            Contact
          </li>
        </ul>
      </div>

      <WelcomePage />

      <div ref={about} className="h-auto">
        <div className="flex items-center mb-8">
          <h3 className="text-myteal text-3xl font-semibold ml-48">About</h3>
          <hr className="border-1 border-myteal h-0 ml-10 w-35p lg:w-line" />
        </div>
        <About />
      </div>

      <div ref={experience} className="h-auto">
        <div className="flex items-center mb-12">
          <h3 className="text-myteal text-3xl font-semibold ml-48">
            Experience
          </h3>
          <hr className="border-1 border-myteal h-0 ml-10 w-35p lg:w-line" />
        </div>
        <Experience />
      </div>

      <div ref={contact} className="w-full h-auto">
        <div className="flex items-center mb-10">
          <h3 className="text-slate-300 text-3xl font-semibold ml-48">
            Contact
          </h3>
          <hr className="border border-myteal h-0 ml-10 w-35p lg:w-line" />
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <Contact />
        </div>
      </div>

      {p1 && (
        <div className="fixed bottom-5 text-center w-full">
          <div className="text-namewhite flex justify-center w-full">
            <FaCaretDown
              size={40}
              className="mx-auto animate-bounce cursor-pointer transition duration-200 ease-in-out transform hover:opacity-70"
              onClick={() => next()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default App;