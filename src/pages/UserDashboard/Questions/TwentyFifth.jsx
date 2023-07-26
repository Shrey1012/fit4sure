import React from 'react';
import './Question.css';

const TwentyFifth = ({ surveyData, setSurveyData}) => {
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
        25. Do you feel that your weight has been an issue for your ability to socialize with others?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="weightIssueInSocializing"
          value="Yes"
          checked={surveyData.weightIssueInSocializing === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="weightIssueInSocializing"
          value="Sometimes"
          checked={surveyData.weightIssueInSocializing === 'Sometimes'}
          onChange={onChange}
        />
        <label>Sometimes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="weightIssueInSocializing"
          value="No"
          checked={surveyData.weightIssueInSocializing === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default TwentyFifth;
