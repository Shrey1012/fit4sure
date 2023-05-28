import React from 'react'
import './Download.css';
import GooglePlay from '../assets/GooglePlay.svg';
import AppStore from '../assets/AppStore.svg';

const Download = () => {
  return (
    <div className='download-main'>
      <div className='download-left'>
        <div className='download-left-text'>
          <div className='download-text1'>Join Fit4sure and stay rest assured; within <strong>16 weeks</strong>, your healthy, mindful,<span className='high-text'> guilt-free fitness</span> is ensured.</div>
          <div className='download-text2'>
          Whether you are a college student, a retired individual, or a business person, we offer personalized premium services at a price-friendly cost.

In order to help you feel more self-assured and inspired every day, our professionals will help you at every stage. Let's beat obesity together.
          </div>
        </div>
        <div className='download-buttons'>
          <button className='down-play'>
            <img src={GooglePlay} alt="Play store" />
          </button>
          <button className='down-apple'>
            <img src={AppStore} alt="App store" />
          </button>
        </div>
      </div>
      <div className='download-right'></div>
    </div>
  )
}

export default Download