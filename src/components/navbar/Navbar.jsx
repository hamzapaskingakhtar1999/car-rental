import React, { useState } from "react";

/* CSS File */
import "./Navbar.css";

/* SVG */
import HPA from "../../assets/Logo.png";

/* React Icons */
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggleNavbar = () => {
    setActive(!active);
  };
  return (
    <div className="navbar">
      <img src={HPA} className="navbar-logo" />

      <ul className={`link-items ${active ? "active" : ""}`}>
        <a href="#">
          {" "}
          <li className="link-item">Home</li>
        </a>
        <a href="#">
          <li className="link-item">About</li>
        </a>
        <a href="#">
          {" "}
          <li className="link-item">Vehicle Models</li>
        </a>
        <a href="#">
          {" "}
          <li className="link-item">Testimonials</li>
        </a>
        <a href="#">
          {" "}
          <li className="link-item">Our Team</li>
        </a>
        <a href="#">
          {" "}
          <li className="link-item">Contact</li>
        </a>
      </ul>

      <div className="right hide">
        <span className="link-item">Sign In</span>
        <button className="navbar-button">
          <h5>Register</h5>
        </button>
      </div>
      {active ? (
        <AiOutlineClose className="toggle-navbar" onClick={toggleNavbar} />
      ) : (
        <FaBars className="toggle-navbar" onClick={toggleNavbar} />
      )}
    </div>
  );
};

export default Navbar;
