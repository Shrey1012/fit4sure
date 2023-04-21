import React from "react";
import "./Features.css";
import { FeaturesData } from "../data";
import FeatureCarousel from "./FeatureCarousel";

const Features = () => {
  
  return (
    <div>
      <div className="features-top">
        <div className="top-text">
          <span>Personalized & Psychological approach For Sustainable</span>
          <span className="high-text">Weight-loss</span>
        </div>
      </div>
      <div className="features-bottom">
        <div className="feature-card1"></div>
      </div>
      <FeatureCarousel featureCards={FeaturesData} />
    </div>
  );
};

export default Features;
