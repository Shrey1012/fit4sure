import React, {useState, useEffect} from "react";
import "./Hero.css";
import landingRightImg from "../assets/landing right img.svg";
import outerstar from '../assets/outerstar.svg';
import arrownxt from '../assets/arrownxt.svg';
import axios from "axios";
import { scroller } from "react-scroll";

const Hero = () => {
  const [hero, setHero] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/web_hero/all")
      .then((res) => {
        const hero = res.data.hero[0];
        setHero(hero);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderTitle = () => {
    if (hero.title) {
      const words = hero.title.split(" ");
      const lastWord = words.pop();

      return (
        <>
          {words.map((word, index) => (
            <span key={index}>{word} </span>
          ))}
          <strong>{lastWord}</strong>
        </>
      );
    }
    return null;
  };

  const handleScrollToHero = () => {
    scroller.scrollTo("hero", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    
    <div className="hero-container" id="hero">
      <div className="hero_left">
        <div className="hero-text1">{renderTitle()}.. </div>
        <div className="hero-text2"> {hero.description} </div>
      <div className="hero-line"/>
      <button className="hero-button" onClick={handleScrollToHero}> Get Started<img src={arrownxt} alt=" " /></button>
      </div>
      <div className="hero-right">
        <img className="hero-image" src={landingRightImg} alt="img" />
        </div>
      <img className="star-img" src={outerstar} alt="starr" />
    </div>
  );
};

export default Hero;
