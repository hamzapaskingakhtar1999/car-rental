import React from "react";

/* CSS */
import "./About.css";
import Hero from "../../components/hero other/Hero";

/* image */
import aboutinfo from "../../assets/about.jpg";
import icon1 from "../../assets/about/icon1.png";
import icon2 from "../../assets/about/icon2.png";
import icon3 from "../../assets/about/icon3.png";

/* Components */
import Process from "../../components/process/Process";
import Banner from "../../components/banner/Banner";

import { BannerAboutData } from "../../data/BannerData";

const About = () => {
  return (
    <div className="about">
      <Hero />
      <div className="about-info">
        {/* Left */}
        <div className="about-left">
          <img src={aboutinfo} className="about-image" />
        </div>
        {/* Right */}
        <div className="about-right">
          <h3 className="about-subheading">About Company</h3>
          <h1 className="about-heading">
            You start the engine and your adventure begins
          </h1>
          <p className="about-description">
            Certain but she but shyness why cottage. Guy the put instrument sir
            entreaties affronting. Pretended exquisite see cordially the you.
            Weeks quiet do vexed or whose. Motionless if no to affronting
            imprudence no precaution. My indulged as disposal strongly attended.
          </p>
          <div className="about-stats">
            <div className="about-stat">
              <img src={icon1} />
              <h4>20 Car types</h4>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">
                <img src={icon2} />
              </div>
              <h4>85 Rental Outlets</h4>
            </div>
            <div className="about-stat">
              <div className="about-stat-icon">
                {" "}
                <img src={icon3} />
              </div>
              <h4>75 Repair Shop</h4>
            </div>
          </div>
        </div>
      </div>
      <Process />
      <Banner data={BannerAboutData} />
    </div>
  );
};

export default About;
