import React from "react";

/* CSS */
import "./Hero.css";

/* Components */
import Navbar from "../navbar/Navbar";

/* Icons */
import {
  AiOutlineCar,
  AiOutlineArrowRight,
  AiFillCar,
  AiOutlineCalendar,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

/* Image */
import HeroImage from "../../assets/Background/home-hero-image.png";

const Hero = () => {
  return (
    <div className="hero">
      <Navbar />
      <div className="hero-flex center">
        <div className="hero-left">
          <h5 className="hero-subheading">Plan your trip now</h5>
          <h1 className="hero-heading">
            Save <span style={{ color: "orangered" }}>big</span> with our car
            rental
          </h1>
          <p className="hero-description">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
          <div className="hero-buttons">
            <button className="hero-button1">
              <span>Book Ride</span>
              <AiOutlineCar className="button-icon" />
            </button>
            <button className="hero-button2">
              <span>Learn More</span>
              <AiOutlineArrowRight className="button-icon" />
            </button>
          </div>
        </div>
        <div className="hero-right">
          <img src={HeroImage} className="home-hero-image" />
        </div>
      </div>

      {/* Book a car section */}
      <div className="book-car center">
        <h3 className="book-heading">Book a car</h3>

        <div className="book-car-items">
          <div className="book-car-item">
            <div className="book-car-heading">
              <AiFillCar className="book-car-icon" />
              <span className="book-span">Select Car Type</span>
            </div>
            <select>
              <option disabled selected="selected">
                Select your car type
              </option>
              <option value="">BMW i8</option>
              <option value="">Mercedez Benz S-class</option>
              <option value="">Fortuner Sigma 4</option>
              <option value="">Land Cruiser TX</option>
              <option value="">Honda Civic X</option>
              <option value="">Toyota Corolla GLI</option>
            </select>
          </div>

          <div className="book-car-item">
            <div className="book-car-heading">
              <FaMapMarkerAlt className="book-car-icon" />
              <span className="book-span">Pick-up</span>
            </div>
            <input type="text" placeholder="Enter Pick up Location" />
          </div>

          <div className="book-car-item">
            <div className="book-car-heading">
              <FaMapMarkerAlt className="book-car-icon" />
              <span className="book-span">Drop-of</span>
            </div>
            <input type="text" placeholder="Enter Drop off Location" />
          </div>

          <div className="book-car-item">
            <div className="book-car-heading">
              <AiOutlineCalendar className="book-car-icon" />
              <span className="book-span">Pick-up Date</span>
            </div>
            <input type="date" />
          </div>

          <div className="book-car-item">
            <div className="book-car-heading">
              <AiOutlineCalendar className="book-car-icon" />
              <span className="book-span">Drop-of Date</span>
            </div>
            <input type="date" />
          </div>

          <div className="book-car-item">
            <div className="book-car-heading">
              <span>&nbsp;</span>
            </div>

            <button className="hero-button1 search-button">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
