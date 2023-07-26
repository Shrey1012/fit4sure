import React from 'react';
import './Question.css';

const Eleventh = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
      diagnosisDetails: checked ? '' : prevData.diagnosisDetails,
    }));
  };

  const onDetailsChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="question-container">
      <h3 className="question-heading">11. Are you going on with any active diagnosis??</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="activeDiagnosis"
          value="Yes"
          checked={surveyData.activeDiagnosis === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="activeDiagnosis"
          value="No"
          checked={surveyData.activeDiagnosis === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
      {surveyData.activeDiagnosis === 'Yes' && (
        <div className="question-details">
          <label>Please specify:</label>
          <input
            type="text"
            name="diagnosisDetails"
            value={surveyData.diagnosisDetails}
            onChange={onDetailsChange}
            placeholder="Enter diagnosis details"
          />
        </div>
      )}
    </div>
  );
};

export default Eleventh;
