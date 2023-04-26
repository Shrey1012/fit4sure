import React from "react";
import "./Contactus.css";
import contact_leftImg from "../assets/contact_leftImg.svg";
import whatsapp_logo from "../assets/whatsapp_logo.svg";
import message_logo from "../assets/message_logo.svg";
import mail_logo from "../assets/mail_logo.svg";

const Contactus = () => {
  const phoneNumber = "+919313100852"; // Replace with your phone number
  const message = "Hello! I have a question."; // Replace with your pre-filled message
  const emailAddress = "202051053@iiitvadodara.ac.in"; // Replace with the recipient's email address
  const subject = "Question about your product"; // Replace with your email subject
  const body = "Hello, I have a question about your product..."; // Replace with your email body

  const handleWhatsapp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleSms = () => {
    window.location.href = `sms:${phoneNumber}`;
  };

  const handleEmail = () => {
    const url = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <div className="contact-main">
      <div className="contact-txt1">Talk to us</div>
      <div className="contact-txt2">
        Book an appointment with us and we will get back to you shortly.
      </div>

      <div className="contact-mid">
        <div className="contact-mid-left">
          <img src={contact_leftImg} alt="Contact us" />
        </div>
        <div className="contact-mid-right">
          <div>Name</div>
          <input type="Name" placeholder="Name" />
          <div>Email</div>
          <input type="Email" placeholder="Email" />
          <div>Mobile number</div>
          <input type="Mobile_number" placeholder="Mobile number" />
          <div>Topic of discussion</div>
          <input
            id="discussion"
            type="Topic_discussion"
            placeholder="Write here"
          />
          <button className="book-now">Book now</button>
        </div>
      </div>
      <h2>or</h2>
      <div className="contact-social">
        <div onClick={handleWhatsapp} style={{ cursor: "pointer" }}>
          <img src={whatsapp_logo} alt="Whatsapp" />
          <p>Chat with us</p>
        </div>
        <div onClick={handleSms} style={{ cursor: "pointer" }}>
          <img src={message_logo} alt="Message" />
          <p>Message us</p>
        </div>
        <div onClick={handleEmail} style={{ cursor: "pointer" }}>
          <img src={mail_logo} alt="Mail" />
          <p>mail us</p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
