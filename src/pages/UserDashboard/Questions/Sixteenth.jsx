import React from 'react';
import './Question.css';

const Sixteenth = ({ surveyData, setSurveyData}) => {
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
        16. How do you see yourself after the goals that you wish to achieve?
      </h3>
      <div className="radio-option">
        <input
          type="radio"
          name="selfImage"
          value="Happiness"
          checked={surveyData.selfImage === 'Happiness'}
          onChange={onChange}
        />
        <label>Happiness</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="selfImage"
          value="Peace"
          checked={surveyData.selfImage === 'Peace'}
          onChange={onChange}
        />
        <label>Peace</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="selfImage"
          value="Revitalised"
          checked={surveyData.selfImage === 'Revitalised'}
          onChange={onChange}
        />
        <label>Revitalised</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="selfImage"
          value="Gratitude"
          checked={surveyData.selfImage === 'Gratitude'}
          onChange={onChange}
        />
        <label>Gratitude</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="selfImage"
          value="Empowerment"
          checked={surveyData.selfImage === 'Empowerment'}
          onChange={onChange}
        />
        <label>Empowerment</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="selfImage"
          value="Other"
          checked={surveyData.selfImage === 'Other'}
          onChange={onChange}
        />
        <label>Other</label>
      </div>
    </div>
  );
};

export default Sixteenth;
