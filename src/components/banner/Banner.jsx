import React from "react";

/* CSS */
import "./Banner.css";

const Banner = ({ data }) => {
  return data.map((item) => (
    <div className="banner">
      <h1 className="banner-heading">{item.heading}</h1>
      <h3 className="banner-subheading">{item.subheading}</h3>
    </div>
  ));
};

export default Banner;
