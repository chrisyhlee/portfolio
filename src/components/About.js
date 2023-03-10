import React from "react";
import profilepicture from '../assets/profilepicture.png'
import {FaCheckSquare} from 'react-icons/fa'

const About = () => {
    return (
        <>
        <div className="aboutSection">
            <div>
                <p className='aboutBody'>Welcome to my portfolio! My name is Chris and I have a passion of learning and growing every day! Web development has a unique way of testing this passion by constantly presenting brand new ideas and challenges to conquer.</p>
                <br></br>
                <p className='aboutBody'>I am currently a full time student at LEARN Academy, part of the Hotel 2022 cohort, which is an intensive, accelerated, 16 week, full stack development bootcamp. Before getting into development, I was a healthcare specialist (medic) in the U.S Army, serving on active duty in the 82nd Airborne Division. I then decided to go back to college in the medical field for a couple years, but realized I did not enjoy it enough to make it a career. Before I knew it, I found myself beginning my journey in development at LEARN Academy and have not looked back since!</p>
                <br></br>
            </div>
            <div className="profilePic" style={{backgroundImage: 'url(' + profilepicture + ')'}}>
            </div>
        </div>
        <h2 className="techStack">Tech Stack:</h2>

        <div className="techStackList">
            <ul className="fa-ul aboutBody">
                <li><span className="fa-li"><i className="fa-solid fa-check-square"></i></span>JavaScript</li>
                <li>Ruby</li>
                <li>SQL</li>
                <li>HTML / CSS</li>
            </ul>
            <ul className="aboutBody">
                <li>React</li>
                <li>Rails</li>
                <li>JEST</li>
                <li>RSpec</li>
            </ul>
        </div>
        </>

    )
}

export default About