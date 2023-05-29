import React, { useState, useRef, useEffect} from "react";
import "./Features.css";
import FeatureCard from "./FeatureCard";
import axios from "axios";
import arrow_left from "../assets/arrow_left.svg";
import arrow_right from "../assets/arrow_right.svg";

const Features = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [FeaturesData, setFeaturesData] = useState([]);
  const numFeatures = FeaturesData.length;


  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/web_features/all")
      .then((res) => {
        const featuresArray = Object.values(res.data.features); // Convert the object to an array
      setFeaturesData(featuresArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handlePrevClick = () => {
    let nextIndex = startIndex - 1;
    if (nextIndex < 0) {
      nextIndex = numFeatures - 3;
    }
    setStartIndex(nextIndex);
  };

  const handleNextClick = () => {
    let nextIndex = startIndex + 1;
    if (nextIndex > numFeatures - 3) {
      nextIndex = 0;
    }
    setStartIndex(nextIndex);
  };


  return (
    <div className="features-main">
      <div className="features-top">
        <div className="top-text">
          <span>Personalized & Psychological approach For Sustainable</span>
          <span className="high-text">Weight-loss</span>
        </div>
      </div>
      <div className="features-bottom">
        <div className="feature-cards">
          {FeaturesData.slice(startIndex, startIndex + 3).map(
            (feature, index) => (
              <FeatureCard
                key={feature._id}
                img={feature.image}
                title={feature.title}
                desc={feature.description}
                index={startIndex + index}
              />
            )
          )}
        </div>
        <div className="fet-arrows">
          <img src={arrow_left} alt="Prev" onClick={handlePrevClick} />
          <img src={arrow_right} alt="Next" onClick={handleNextClick} />
        </div>
      </div>
    </div>
  );
};

export default Features;
