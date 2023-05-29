import React from "react";
import "./Hero.css";
import landingRightImg from "../assets/landing right img.svg";
import outerstar from '../assets/outerstar.svg';
import arrownxt from '../assets/arrownxt.svg';
const Home = () => {
  return (
    
    <div className="hero-container">
      <div className="hero_left">
        <div className="hero-text1">Only workout!? No, It's all about <strong>Fitness</strong>.. </div>
        <div className="hero-text2"> 
        Achieve Your Fitness Dreams with Fit4sure. Our Tailored Programs and Support Ensure Success. A flexible app that curates plans as per your versatile schedule. Join Us Today!
        </div>
      <div className="hero-line"/>
      <button className="hero-button"> Get Started<img src={arrownxt} alt=" " /></button>
      </div>
      <div className="hero-right">
        <img className="hero-image" src={landingRightImg} alt="img" />
        </div>
      
      {/* <div className="highlight1"></div> */}
      <img className="star-img" src={outerstar} alt="starr" />
    </div>
  );
};

export default Home;
