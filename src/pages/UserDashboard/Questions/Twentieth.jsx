import React from 'react';
import './Question.css';

const Twentieth = ({ surveyData, setSurveyData}) => {
    const onChange = (e) => {
        const { name, value, checked } = e.target;

        setSurveyData((prevData) => ({
          ...prevData,
          [name]: checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value),
        }));
      };
      

  return (
    <div className="question-container">
      <h3 className="question-heading">20. When do you feel you gained more weight? Choose all that apply</h3>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Covid-19 pandemic"
          checked={surveyData.weightGainReasons.includes('Covid-19 pandemic')}
          onChange={onChange}
        />
        <label>Covid-19 pandemic</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Marriage or relationship"
          checked={surveyData.weightGainReasons.includes('Marriage or relationship')}
          onChange={onChange}
        />
        <label>Marriage or relationship</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Injury"
          checked={surveyData.weightGainReasons.includes('Injury')}
          onChange={onChange}
        />
        <label>Injury</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Busier work & family life"
          checked={surveyData.weightGainReasons.includes('Busier work & family life')}
          onChange={onChange}
        />
        <label>Busier work & family life</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Slower metabolism"
          checked={surveyData.weightGainReasons.includes('Slower metabolism')}
          onChange={onChange}
        />
        <label>Slower metabolism</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Stress or Mental Health"
          checked={surveyData.weightGainReasons.includes('Stress or Mental Health')}
          onChange={onChange}
        />
        <label>Stress or Mental Health</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="Medication or Hormonal Disorder"
          checked={surveyData.weightGainReasons.includes('Medication or Hormonal Disorder')}
          onChange={onChange}
        />
        <label>Medication or Hormonal Disorder</label>
      </div>
      <div className="checkbox-option">
        <input
          type="checkbox"
          name="weightGainReasons"
          value="None of the above"
          checked={surveyData.weightGainReasons.includes('None of the above')}
          onChange={onChange}
        />
        <label>None of the above</label>
      </div>
    </div>
  );
};

export default Twentieth;
