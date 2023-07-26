import React from 'react';
import './Question.css';

const TwentySixth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">
        26. Do you relate to the fact that you need motivation at times to continue being on the healthy path?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="needForMotivation"
          value="Yes"
          checked={surveyData.needForMotivation === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="needForMotivation"
          value="Sometimes"
          checked={surveyData.needForMotivation === 'Sometimes'}
          onChange={onChange}
        />
        <label>Sometimes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="needForMotivation"
          value="No"
          checked={surveyData.needForMotivation === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default TwentySixth;
