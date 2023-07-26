import React from 'react';
import './Question.css';

const TwentyFourth = ({ surveyData, setSurveyData}) => {
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
        24. Can you identify with the following statement: "I understand what actions I need to take to achieve weight loss, but I require a method that can be customised to my lifestyle"?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="customMethodUnderstanding"
          value="1"
          checked={surveyData.customMethodUnderstanding === '1'}
          onChange={onChange}
        />
        <label>1 - Strongly Disagree</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="customMethodUnderstanding"
          value="2"
          checked={surveyData.customMethodUnderstanding === '2'}
          onChange={onChange}
        />
        <label>2</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="customMethodUnderstanding"
          value="3"
          checked={surveyData.customMethodUnderstanding === '3'}
          onChange={onChange}
        />
        <label>3</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="customMethodUnderstanding"
          value="4"
          checked={surveyData.customMethodUnderstanding === '4'}
          onChange={onChange}
        />
        <label>4</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="customMethodUnderstanding"
          value="5"
          checked={surveyData.customMethodUnderstanding === '5'}
          onChange={onChange}
        />
        <label>5 - Strongly Agree</label>
      </div>
    </div>
  );
};

export default TwentyFourth;
