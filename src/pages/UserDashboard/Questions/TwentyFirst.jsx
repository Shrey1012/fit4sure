import React from 'react';
import './Question.css';

const TwentyFirst = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">21. How much time has passed ever since you gained the weight</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="weightGainTime"
          value="0 - 6 months"
          checked={surveyData.weightGainTime === '0 - 6 months'}
          onChange={onChange}
        />
        <label>0 - 6 months</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="weightGainTime"
          value="6 - 12 months"
          checked={surveyData.weightGainTime === '6 - 12 months'}
          onChange={onChange}
        />
        <label>6 - 12 months</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="weightGainTime"
          value="1 - 3 years"
          checked={surveyData.weightGainTime === '1 - 3 years'}
          onChange={onChange}
        />
        <label>1 - 3 years</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="weightGainTime"
          value="More than 3 years"
          checked={surveyData.weightGainTime === 'More than 3 years'}
          onChange={onChange}
        />
        <label>More than 3 years</label>
      </div>
    </div>
  );
};

export default TwentyFirst;
