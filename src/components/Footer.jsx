import React,{useState,useEffect} from 'react';
import './Footer.css';
import GooglePlay from '../assets/GooglePlay.svg';
import AppStore from '../assets/AppStore.svg';
import fflogo_white from '../assets/fflogo_white.svg';
import youtube from '../assets/youtube.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import facebook from '../assets/facebook.svg';
import axios from 'axios';

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/setting_footer/all")
      .then((res) => {
        const footer = res.data.footer;
        setFooter(footer);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='footer-main'>
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='footer-logo'>
            <img src={fflogo_white} alt="Fit4sure" />
          </div>
          <div className='footer-buttons'>
            <button onClick={() => window.location.href = footer.playstore_link} className='footer-play'>
              <img src={GooglePlay} alt="Play store" />
            </button>
            <button onClick={() => window.location.href = footer.appstore_link} className='footer-apple'>
              <img src={AppStore} alt="App store" />
            </button>
          </div>
          <div className='footer-social'>
            <img onClick={() => window.location.href = footer.youtube_link} src={youtube} alt="youtube" />
            <img onClick={() => window.location.href = footer.instagram_link} src={instagram} alt="instagram" />
            <img onClick={() => window.location.href = footer.twitter_link} src={twitter} alt="twitter" />
            <img onClick={() => window.location.href = footer.facebook_link} src={facebook} alt="facebook" />
          </div>
          <div className='footer-para'>
            {footer.description}
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