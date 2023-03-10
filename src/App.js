import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import BackToTop from './components/BackToTop';
import About from './components/About';
import profilepicture from './assets/profilepicture.png'

const App = () => {
  const about = useRef(null)
  const experience = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <BackToTop />
      <div className='navbar'>
        <ul>
          <li onClick={() => scrollToSection(about)}  className='navLinks'>About</li>
          <li onClick={() => scrollToSection(experience)} className='navLinks'>Experience</li>
          <li onClick={() => scrollToSection(contact)} className='navLinks'>Contact</li>
        </ul>
      </div>

      <div className='outerWrapper1'>
        <div className='textWrapper'>
          <h4 className='helloHeader'>Hello! My name is</h4>
          <h1 className='nameHeader'>Chris Lee.</h1>
          <h1 className='nameHeader2'>Full Stack Developer.</h1>
          <p className='welcomeDesc'>Currently part of the Hotel 2022 cohort at LEARN Academy learning the foundations of becoming a full-stack web developer.</p>
        </div>
      </div>

      <div ref={about} className='aboutMe'>
        <h3 className='aboutHeader'>About</h3>
        <About />
      </div>

      <div ref={experience} className='aboutMe'>
        <h3 className='aboutHeader'>Experience</h3>
      </div>

      <div ref={contact} className='aboutMe'>
        <h3 className='aboutHeader'>Contact</h3>
      </div>
    </>
  )
}

export default App;
