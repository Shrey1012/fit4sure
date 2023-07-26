import React from 'react';
import './Question.css';

const ThirtySecond = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const options = [
    "Influencer", "Instagram", "Reddit", "Friend or Family", "Search Engine (Google, Bing, etc.)",
    "Pinterest", "Radio", "TikTok", "Online TV or Streaming TV", "TV", "Print, Magazine, Poster or Billboard",
    "Snapchat", "Facebook", "Blog Post or Review on a Website", "Youtube", "Podcast",
    "Direct Mail or Package Insert", "Other"
  ];

  return (
    <div className="question-container thirty-second-question">
      <h3 className="question-heading">
        32. Just a last quick question. Where did you hear about us?
      </h3>
      <div className="radio-option-group thirty-second-options">
        {options.map((option, index) => (
          <div className="radio-option" key={index}>
            <input
              type="radio"
              name="hearingSource"
              value={option}
              checked={surveyData.hearingSource === option}
              onChange={onChange}
              id={`option-${index}`}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirtySecond;
