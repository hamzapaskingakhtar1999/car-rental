import React from "react";
import Hero from "../../components/hero other/Hero";

/* CSS */
import "./Contact.css";

/* React Icons */
import { IoIosCall } from "react-icons/io";
import { BiSolidMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <Hero />
      <div className="contact center">
        <div className="contact-left">
          <h1 className="contact-heading">Need additional information?</h1>
          <p className="contact-description">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <div className="contact-item">
            <IoIosCall />
            (123) 456-7890
          </div>
          <div className="contact-item">
            <AiOutlineMail />
            (123) 456-7890
          </div>
          <div className="contact-item">
            <BiSolidMap />
            (123) 456-7890
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-right-item">
            <h4>Full Name</h4>
            <input type="text" placeholder="John Doe" className="mywidth" />
          </div>
          <div className="contact-right-item">
            <h4>Email</h4>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="mywidth"
            />
          </div>
          <div className="contact-right-item">
            <h4>Tell me about it</h4>
            <textarea
              placeholder="Your Message Here..."
              style={{ resize: "vertical", padding: "15px" }}
              className="mywidth"
              rows={12}
            />
          </div>
          <button className="hero-button1">Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
