import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import "./FeatureCarousel.css";

const FeatureCarousel = ({ featureCards }) => {
    const [visibleFeatures, setVisibleFeatures] = useState(featureCards.slice(0, 3));

    const showNextFeatures = () => {
      const currentIndex = featureCards.indexOf(visibleFeatures[0]);
      const nextIndex = currentIndex + 1;
      const nextFeatures = featureCards.slice(nextIndex, nextIndex + 3);
      setVisibleFeatures(nextFeatures);
    };
  
    const showPrevFeatures = () => {
      const currentIndex = featureCards.indexOf(visibleFeatures[0]);
      const prevIndex = currentIndex - 1;
      const prevFeatures = featureCards.slice(prevIndex, prevIndex + 3);
      setVisibleFeatures(prevFeatures);
    };
  return (
    <div>
      <div className="carousel-container">
        {visibleFeatures.map((feature) => (
          <FeatureCard
          key={feature.id}
          img={feature.img}
          title={feature.title}
          desc={feature.data}
          i={feature.id}
        />
        ))}
      </div>
      <div className="carousel-buttons">
        <button onClick={showPrevFeatures} disabled={featureCards.indexOf(visibleFeatures[0]) === 0}>Prev</button>
        <button onClick={showNextFeatures} disabled={featureCards.indexOf(visibleFeatures[2]) === featureCards.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default FeatureCarousel;
