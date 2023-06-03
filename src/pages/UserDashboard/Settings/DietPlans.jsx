import React from 'react'
import { useState } from 'react';
import edit_icon from '../../../assets/edit_icon.svg'
import check from '../../../assets/check.svg'


const DietPlans = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [textValue, setTextValue] = useState('Initial Text');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform any save logic here, such as making an API request
  };

  const handleInputChange = (event) => {
    setTextValue(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className='Setting-main-view'>
      <div className='Setting-title-view'>Personal Details</div>
      <div className='Setting-data-view'>
      
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>First name:</div>
          <div className='Setting-data-value'>
          {isEditing ? (
            <input
              type="text"
              value={textValue}
              onChange={handleInputChange}
            />
          ) : (
            <p>{textValue}</p>
          )}
          </div>
        </div>
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>Last name:</div>
          <div className='Setting-data-value'>
            {isEditing ? (
            <input
              type="text"
              value={textValue}
              onChange={handleInputChange}
            />
          ) : (
            <p>{textValue}</p>
          )}
          </div>
        </div>
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>Email:</div>
          <div className='Setting-data-value'>
            {isEditing ? (
              <input
                type="text"
                value={textValue}
                onChange={handleInputChange}
              />
            ) : (
              <p>{textValue}</p>
            )}
          </div>
        </div>
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>Contact number:</div>
          <div className='Setting-data-value'>
            {isEditing ? (
              <input
                type="text"
                value={textValue}
                onChange={handleInputChange}
              />
            ) : (
              <p>{textValue}</p>
            )}
          </div>
        </div>
        
      </div>
      
      {isEditing ? (
        <button onClick={handleSave} className='save-button'><img src={check} alt="" /><h3>Save</h3></button>
        ) : (
        <button onClick={handleEdit} className='edit-button'><img src={edit_icon} alt="edit" /><p>Edit</p></button>
        )}  
      
    </div>
  )
}

export default DietPlans