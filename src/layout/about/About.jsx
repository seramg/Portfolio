import React from "react";
import "./about.css";
import { FaStickyNote } from "react-icons/fa";
import Button from "../../components/Button";
import TwoLineHeading from "../../components/TwoLineHeading";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about flex-container">
        <TwoLineHeading title="About Me" subtitle="My Introduction" />
        <div className="about-content flex-container">
          <div className="image-container">
            <img
              src={require("../../assets/profile-pic.jpg")}
              alt="Sera"
              className="image"
            />
          </div>
          <div className="about-text flex-container">
            <p className="text">
              I'm a dedicated and people-oriented individual who excels in
              teamwork and embraces challenges. Currently, I'm a Computer
              Science and Engineering undergraduate in my 3rd semester at Mar
              Baselios College of Engineering and Technology. My skills
              encompass programming languages like C, Java, and Python, as well
              as projects in Flutter, design using Figma, and front-end web
              development. I actively participate in educational bootcamps
              hosted by organizations like DSC and IEEE to continually improve.
              Serving as the secretary of IEEE RAS MBCET, I lead and mentor
              fellow students. In my free time, I enjoy the art of origami and
              driving.
            </p>
            <Button text="Download Resume" icon={FaStickyNote} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
