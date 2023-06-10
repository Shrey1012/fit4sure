import React, { useState } from "react";
import "./Contactus.css";
import contact_leftImg from "../assets/contact_leftImg.svg";
import whatsapp_logo from "../assets/whatsapp_logo.svg";
import message_logo from "../assets/message_logo.svg";
import mail_logo from "../assets/mail_logo.svg";
import axios from "axios";

const Contactus = () => {
  const phoneNumber = "+919313100852"; // Replace with your phone number
  const message = "Hello! I have a question."; // Replace with your pre-filled message
  const emailAddress = "202051053@iiitvadodara.ac.in"; // Replace with the recipient's email address
  const subject = "Question about your product"; // Replace with your email subject
  const body = "Hello, I have a question about your product..."; // Replace with your email body

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [topic, setTopic] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3001/app/usercontactinfo/add", {
      name,
      email,
      mobileNumber,
      topic,
    });

    setName("");
    setEmail("");
    setMobileNumber("");
    setTopic("");
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
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="mobileNumber">Mobile number</label>
              <input
                type="text"
                id="mobileNumber"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Mobile number"
              />
            </div>
            <div>
              <label htmlFor="topic">Topic of discussion</label>
              <input
                id="topic"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Write here"
              />
            </div>
            <button type="submit" className="book-now">Book now</button>
          </form>
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
