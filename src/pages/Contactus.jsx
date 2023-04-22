import React from 'react'
import './Contactus.css'
import contact_leftImg from '../assets/contact_leftImg.svg';
import whatsapp_logo from '../assets/whatsapp_logo.svg';
import message_logo from '../assets/message_logo.svg';
import mail_logo from '../assets/mail_logo.svg';


const Contactus = () => {
  return (
    <div className='contact-main'>
      
      <div className='contact-txt1'>Talk to us</div>
      <div className='contact-txt2'>Book an appointment with us and we will get back to you shortly.</div>
      
      <div className='contact-mid'>
        <div className='contact-mid-left'>
          <img src={contact_leftImg} alt="Contact us" />
        </div>
        <div className='contact-mid-right'>
          <div>Name</div>
          <input type="Name" placeholder="Name" />
          <div>Email</div>
          <input type="Email" placeholder="Email" />
          <div>Mobile number</div>
          <input type="Mobile_number" placeholder="Mobile number" />
          <div>Topic of discussion</div>   
          <input id='discussion' type="Topic_discussion" placeholder="Write here" />
          <button className='book-now'>Book now</button>
        </div>
      </div>
      <h2>or</h2>
      <div className='contact-social'>
        <div>
          <img src={whatsapp_logo} alt="Whatsapp" />
          <p>Chat with us</p>
        </div>
        <div>
          <img src={message_logo} alt="Message" />
          <p>Message us</p>
        </div>
        <div>
          <img src={mail_logo} alt="Mail" />
          <p>mail us</p>
        </div>

      </div>
    </div>
  )
}

export default Contactus