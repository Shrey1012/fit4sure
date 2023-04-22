import React from 'react';
import './Footer.css';
import GooglePlay from '../assets/GooglePlay.svg';
import AppStore from '../assets/AppStore.svg';
import fflogo_white from '../assets/fflogo_white.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';

const Footer = () => {
  return (
    <div className='footer-main'>
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <img src={fflogo_white} alt="Fit4sure" />
          </div>
          <div className='footer-buttons'>
            <button className='footer-play'>
              <img src={GooglePlay} alt="Play store" />
            </button>
            <button className='footer-apple'>
              <img src={AppStore} alt="App store" />
            </button>
          </div>
          <div className='footer-social'>
            <img src={youtube} alt="youtube" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="youtube" />
          </div>
          <div className='footer-para'>
          Lorem ipsum dolor sit amet. Qui veritatis odit aut amet atque ut inventore quasi ut voluptas laboriosam eos voluptatibus ullam.
          </div>
        </div>
        <div className='footer-right'></div>
      </div>
      <div className='footer-bottom'>
      Copyright fit4sure © 2022 All Rights Reserved
      </div>
    </div>
  )
}

export default Footer