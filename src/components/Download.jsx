import React from 'react'
import './Download.css';
import GooglePlay from '../assets/GooglePlay.svg';
import AppStore from '../assets/AppStore.svg';

const Download = () => {
  return (
    <div className='download-main'>
      <div className='download-left'>
        <div className='download-left-text'>
          <div className='download-text1'>Only workout!? No, It's all about Fitness..</div>
          <div className='download-text2'>
          Access your custom plan, talk to your dedicated coach, and explore exclusive content across nutrition and fitness on your Fitelo app Access your custom plan, talk to your dedicated coach, and explore exclusive content across nutrition and fitness on your Fitelo app.
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