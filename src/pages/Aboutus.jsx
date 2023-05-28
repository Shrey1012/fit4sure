import React from 'react';
import './Aboutus.css';
import youtube_dark from '../assets/youtube_dark.svg';
import instagram_dark from '../assets/instagram_dark.svg';
import twitter_dark from '../assets/twitter_dark.svg';
import facebook_dark from '../assets/facebook_dark.svg';
import aboutimg from '../assets/aboutimg.png';

import { Milestone } from '../components';
const Aboutus = () => {
  return (
    <div className='Aboutus-main'>
      <div className='About1'>
        <div className='About1-left'>
          <div className='About1-lt'>Who we are?</div>
          <div className='About1-lm'>Lorem ipsum dolor sit amet. Sit quia velit non molestiae beatae ut nihil excepturi aut quae blanditiis qui autem voluptatem At inventore voluptas est minima debitis. Aut ipsum corrupti sed nihil impedit id enim cumque aut dolor cumque eos quia quasi in nostrum eveniet eum excepturi autem. Qui aliquid consequatur vel aliquid quia ea amet architecto. Et ipsa perspiciatis eum quae sapiente ad voluptatem natus 33 dolorem enim est voluptas possimus est rerum ducimus a itaque amet  : )</div>
          <div className='About1-lb'>
            <img src={youtube_dark} alt="youtube" />
            <img src={instagram_dark} alt="instagram" />
            <img src={twitter_dark} alt="twitter" />
            <img src={facebook_dark} alt="youtube" />
          </div>
        </div>
        <div className='About1-right'>
          <img src={aboutimg} alt="About us" />
        </div>
      </div>
      <Milestone/>
    </div>
  )
}

export default Aboutus