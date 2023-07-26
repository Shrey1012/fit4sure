import React from 'react';
import './Question.css';

const Tenth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">10. Are you at risk of any of the following?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="Testosterone deficiency"
          checked={surveyData.risks.includes('Testosterone deficiency')}
          onChange={onChange}
        />
        <label>Testosterone deficiency</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="Heart Disease or Stroke"
          checked={surveyData.risks.includes('Heart Disease or Stroke')}
          onChange={onChange}
        />
        <label>Heart Disease or Stroke</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="High Blood Pressure"
          checked={surveyData.risks.includes('High Blood Pressure')}
          onChange={onChange}
        />
        <label>High Blood Pressure</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="Diabetes"
          checked={surveyData.risks.includes('Diabetes')}
          onChange={onChange}
        />
        <label>Diabetes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="High Cholesterol"
          checked={surveyData.risks.includes('High Cholesterol')}
          onChange={onChange}
        />
        <label>High Cholesterol</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="Depression"
          checked={surveyData.risks.includes('Depression')}
          onChange={onChange}
        />
        <label>Depression</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="Other"
          checked={surveyData.risks.includes('Other')}
          onChange={onChange}
        />
        <label>Other</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="risks"
          value="None"
          checked={surveyData.risks.includes('None')}
          onChange={onChange}
        />
        <label>None</label>
      </div>
    </div>
  );
};

export default Tenth;
