import "./App.css";
import { useRef } from "react";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Experience from "./components/Experience";
import WelcomePage from "./components/WelcomePage";
import Contact from "./components/Contact";

const App = () => {
  const about = useRef(null);
  const experience = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 70,
      behavior: "smooth",
    });
  };

  return (
    <>
      <BackToTop />
      <div className="h-12 items-center text-myteal bg-navgrey w-screen flex justify-end fixed top-0 z-10">
        <ul>
          <li
            onClick={() => scrollToSection(about)}
            className="list-none inline text-lg font-semibold cursor-pointer mr-2 navLinks"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection(experience)}
            className="list-none inline p-1 text-lg font-semibold cursor-pointer mr-2 navLinks"
          >
            Experience
          </li>
          <li
            onClick={() => scrollToSection(contact)}
            className="list-none inline p-1 text-lg font-semibold cursor-pointer mr-2 navLinks"
          >
            Contact
          </li>
        </ul>
      </div>

      <WelcomePage />

      <div ref={about} className="h-auto">
        <h3 className="text-myteal text-3xl font-semibold ml-48">About</h3>
        <About />
      </div>

      <div ref={experience} className="h-auto">
        <h3 className="text-myteal text-3xl font-semibold ml-48">Experience</h3>
        <Experience />
      </div>

      <div ref={contact} className="w-full h-auto">
        <h3 className="text-myteal text-3xl font-semibold ml-48 mb-10">Contact</h3>
        <div className="flex flex-col w-full justify-center items-center">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
