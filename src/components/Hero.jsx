import React from "react";
import "./Hero.css";
import landingRightImg from "../assets/landing right img.svg";
const Home = () => {
  return (
    <div className="hero-container">
      <div className="hero-text1">Only workout!? No, It’s all about Fitness.. </div>
      <div className="hero-text2">
        We make you do the exercise you like, provide constant encouragement,
        amend your mindset to live life like a fitness freak. The exercise
        tracking tool and 8 other tools act as the cherry on the cake.
      </div>
      <hr className="hero-line"/>
      <button className="hero-button">Get Started</button>
      <img className="hero-image" src={landingRightImg} alt="img" />
    </div>
  );
};

export default Home;
