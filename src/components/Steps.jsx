import React from 'react'
import './Steps.css';
import y_arrow from '../assets/y_arrow.svg';

const Steps = () => {
  return (
    <div className='steps-main'>
      <div className='steps-content'>
      <div className='top-text1'>Juat 4 easy steps</div>
      <div className='top-text2'>Our professionals understand that every person has a different metabolism. We'll make your weight loss journey a walk in the park with advanced, fun, and practical one-to-one coaching tips, tracking tools, and support groups.</div>
      <div className='steps-box'>
        <div className='stepall'>
          <div className='num-txt'>1</div>
          <div className='steps-line'></div>
          <div className='steps-txt'>Provide basic information about your body</div>
        </div> 
        <img src={y_arrow} alt="next" />
        <div className='stepall'>
          <div className='num-txt'>2</div>
          <div className='steps-line'></div>
          <div className='steps-txt'>Get a customized approach to meal and exercise plans</div>
        </div>
        <img src={y_arrow} alt="next" />
        <div className='stepall'>
          <div className='num-txt'>3</div>
          <div className='steps-line'></div>
          <div className='steps-txt'>Track your daily, weekly, and monthly progress to stay motivated</div>
        </div>
        <img src={y_arrow} alt="next" />
        <div className='stepall'>
          <div className='num-txt'>4</div>
          <div className='steps-line'></div>
          <div className='steps-txt'>2-way communication and constant feedback from both parties for improvement</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Steps