import React from 'react';
import './Question.css';

const Ninth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">9. Let’s go to some health questions…Do you have any previous body/health issues?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="healthIssues"
          value="Yes"
          checked={surveyData.healthIssues === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="healthIssues"
          value="No"
          checked={surveyData.healthIssues === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default Ninth;
