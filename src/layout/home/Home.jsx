import React from "react";
import "./home.css";
import Social from "./Social";
import {  FaPaperPlane } from "react-icons/fa";
import Button from "../../components/Button";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-content flex-container">
        <Social />
        <div className="intro-section flex-container">
          <div className="intro-title">
            <h1 className="section-title">Sera Mariam George</h1>
          </div>
          <div className="intro-subtitle flex-container">
            <div className="hyphen"></div>
            <h2 className="section-subtitle">Software Developer</h2>
          </div>
          <p className="text">
          I am a software developer based in Trivandrum and I am very passionate and dedicated to my work.
          </p>
          <Button text="Say Hello" icon={FaPaperPlane}/>
        </div>
        <div className="profile-image-container">
        </div>
      </div>
    </section>
  );
};
export default Home;
