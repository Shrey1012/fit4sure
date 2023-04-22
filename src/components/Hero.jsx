import React from "react";
import "./Hero.css";
import landingRightImg from "../assets/landing right img.svg";
import outerstar from '../assets/outerstar.svg';
const Home = () => {
  return (
    
    <div className="hero-container">
      <div className="hero_left">
        <div className="hero-text1">Only workout!? No, It's all about Fitness.. </div>
        <div className="hero-text2"> 
        We make you do the exercise you like, provide constant encouragement,
        amend your mindset to live life like a fitness freak. The exercise
        tracking tool and 8 other tools act as the cherry on the cake.
        </div>
      <div className="hero-line"/>
      <button className="hero-button">Get Started</button>
      </div>
      <div className="hero-right">
        <img className="hero-image" src={landingRightImg} alt="img" />
        </div>
      
      <div className="highlight1"></div>
      <img className="star-img" src={outerstar} alt="starr" />
    </div>
  );
};

export default Home;
