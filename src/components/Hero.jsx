import React, {useState, useEffect} from "react";
import "./Hero.css";
import landingRightImg from "../assets/landing right img.svg";
import outerstar from '../assets/outerstar.svg';
import arrownxt from '../assets/arrownxt.svg';
import axios from "axios";

const Home = () => {
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

  return (
    
    <div className="hero-container">
      <div className="hero_left">
        <div className="hero-text1">{renderTitle()}.. </div>
        <div className="hero-text2"> {hero.description} </div>
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
