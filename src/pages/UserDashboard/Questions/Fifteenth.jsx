import React from 'react';
import './Question.css';

const Fifteenth = ({ surveyData, setSurveyData}) => {
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
        15. Hey! We forgot an important question. What can we call you?
      </h3>
      <div className="input-container">
        <label>Preferred first name:</label>
        <input
          type="text"
          name="preferredName"
          value={surveyData.preferredName}
          onChange={onChange}
          placeholder="Enter your good name"
        />
      </div>
    </div>
  );
};

export default Fifteenth;
