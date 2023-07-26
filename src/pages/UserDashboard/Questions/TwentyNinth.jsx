import React from 'react';
import './Question.css';

const TwentyNinth = ({ surveyData, setSurveyData}) => {
  const onChange = (e) => {
    const { name, value, checked } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: value,
      allergenicFoodDetails: checked ? '' : prevData.allergenicFoodDetails,
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
      <h3 className="question-heading">29. Are you allergenic to any specific kind of food?</h3>
      <div className="radio-option">
        <input
          type="radio"
          name="allergenicFood"
          value="Yes"
          checked={surveyData.allergenicFood === 'Yes'}
          onChange={onChange}
        />
        <label>Yes</label>
      </div>
      <div className="radio-option">
        <input
          type="radio"
          name="allergenicFood"
          value="No"
          checked={surveyData.allergenicFood === 'No'}
          onChange={onChange}
        />
        <label>No</label>
      </div>
      {surveyData.allergenicFood === 'Yes' && (
        <div className="question-details">
          <label>Please specify:</label>
          <input
            type="text"
            name="allergenicFoodDetails"
            value={surveyData.allergenicFoodDetails}
            onChange={onDetailsChange}
            placeholder="Enter specific allergenic foods"
          />
        </div>
      )}
    </div>
  );
};

export default TwentyNinth;
