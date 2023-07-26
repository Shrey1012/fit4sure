import React from 'react';
import './Question.css';

const TwentySecond = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">22. Have you tried any of the weight loss programs before?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossProgram"
          value="Yes"
          checked={surveyData.triedWeightLossProgram === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="triedWeightLossProgram"
          value="No"
          checked={surveyData.triedWeightLossProgram === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default TwentySecond;
