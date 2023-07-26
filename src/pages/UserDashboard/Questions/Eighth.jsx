import React from 'react';
import './Question.css';

const Eighth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">8. Do you often involve yourself with sports or some activity?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="sportsInvolvement"
          value="Yes"
          checked={surveyData.sportsInvolvement === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="sportsInvolvement"
          value="No"
          checked={surveyData.sportsInvolvement === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
    </div>
  );
};

export default Eighth;
