import React from "react";

/* CSS */
import "./Footer.css";

/* React Icons */
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section1">
        <h1 className="footer-title">
          <span style={{ color: "orangered" }}>Car</span> Rental
        </h1>
        <div className="footer-items">
          <div className="footer-item">
            <p className="section1-text">
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <div className="footer-flex">
              <BsFillTelephoneFill />
              <h5>(123) -456-789</h5>
            </div>
            <div className="footer-flex">
              <AiOutlineMail />
              <h5>carrental@gmail.com</h5>
            </div>
            <a href="https://xpeedstudio.com/" style={{ cursor: "pointer" }}>
              Design by XpeedStudio
            </a>
          </div>
        </div>
      </div>
      <div className="section2">
        <h1 className="footer-title">COMPANY</h1>
        <div className="footer-items">
          <p className="footer-hover">Pakistan</p>
          <p className="footer-hover">Careers</p>
          <p className="footer-hover">Mobile</p>
          <p className="footer-hover">Blog</p>
          <p className="footer-hover">How we work</p>
        </div>
      </div>
      <div className="section3">
        <h1 className="footer-title">WORKING HOURS</h1>
        <div className="footer-items">
          <p>Mon - Fri: 9:00AM - 9:00PM</p>
          <p>Sat: 9:00AM - 19:00PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <div className="section4">
        <h1 className="footer-title">SUBSCRIPTION</h1>
        <div className="footer-items">
          <p>Subscribe your Email address for latest news & updates.</p>
          <input
            type="text"
            placeholder="Enter Email Address"
            /*          style={{
              border: "none",
              backgroundColor: "rgb(90,90,90)",
              outline: "none",
            }} */
          />
          <button className="hero-button1">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
