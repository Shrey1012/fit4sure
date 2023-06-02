import React from 'react'
import edit from '../../../assets/edit.svg'
const BodySpecifications = () => {
  return (
    <div className='Setting-main-view'>
      <div className='Setting-title-view'><h2>Body Specifications</h2><button className='edit-button'><img src={edit} alt="edit" /></button></div>
      <div className='Setting-data-view'>
        
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>First name:</div>
          <div className='Setting-data-value'>Parth</div>
        </div>
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>Last name:</div>
          <div className='Setting-data-value'>Chandravadiya</div>
        </div>
        
        
        <div className='Setting-data-text'>
          <div className='Setting-data-title'>State of residence:</div>
          <div className='Setting-data-value'>Gujarat</div>
        </div>
      </div>
    </div>
  )
}

export default BodySpecifications