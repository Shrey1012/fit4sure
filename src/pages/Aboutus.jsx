import React,{useState,useEffect} from 'react';
import './Aboutus.css';
import youtube_dark from '../assets/youtube_dark.svg';
import instagram_dark from '../assets/instagram_dark.svg';
import twitter_dark from '../assets/twitter_dark.svg';
import facebook_dark from '../assets/facebook_dark.svg';
import aboutimg from '../assets/aboutimg.png';
import axios from "axios";

import { Milestone } from '../components';
const Aboutus = () => {
  const [aboutUs, setAboutUs] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/setting_footer/all")
      .then((res) => {
        const links = res.data.footer;
        setLinks(links);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/web_aboutus/all")
      .then((res) => {
        const aboutUs = res.data.aboutus[0];
        setAboutUs(aboutUs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const separateDescription = (description) => {
    if (!description) return [];
    return description.split('.').map((sentence, index) => (
      <p key={index}>{sentence.trim()}</p>
    ));
  };

  return (
    <div className='Aboutus-main'>
      <div className='About1'>
        <div className='About1-left'>
          <div className='About1-lt'>Who we are?</div>
          <div className='About1-lm'>{aboutUs.who_we_are}</div>
          <div className='About1-lb'>
            <img onClick={() => window.location.href = links.youtube_link} src={youtube_dark} alt="youtube" />
            <img onClick={() => window.location.href = links.instagram_link} src={instagram_dark} alt="instagram" />
            <img onClick={() => window.location.href = links.twitter_link} src={twitter_dark} alt="twitter" />
            <img onClick={() => window.location.href = links.facebook_link} src={facebook_dark} alt="youtube" />
          </div>
        </div>
        <div className='About1-right'>
          <img src={aboutimg} alt="About us" />
        </div>
      </div>
      <Milestone/>
      <div className='About2'>
        <p>{separateDescription(aboutUs.description)}</p>
      </div>
    </div>
  )
}

export default Aboutus