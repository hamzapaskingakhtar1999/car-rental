import React from "react";

/* CSS */
import "./Download.css";

/* images */
import download from "../../assets/download.png";
import playstore from "../../assets/playstore.svg";
import apple from "../../assets/apple.svg";

const Download = () => {
  return (
    <div className="download-container">
      <div className="download center">
        <div className="left">
          <h1 className="left-title">Download our app to get most out of it</h1>
          <p className="left-description">
            Thrown shy denote ten ladies though ask saw. Or by to he going think
            order event music. Incommode so intention defective at convinced.
            Led income months itself and houses you.
          </p>
          <div className="download-buttons">
            <div className="download-button">
              <img src={playstore} className="download-button-image" />
              <div className="download-text">
                <p className="download-subtitle">GET IT ON</p>
                <h3 className="download-title">Google Play</h3>
              </div>
            </div>
            <div className="download-button">
              <img src={apple} className="download-button-image" />
              <div className="download-text">
                <p className="download-subtitle">Download on the</p>
                <h3 className="download-title">App Store</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={download} className="download-image" />
    </div>
  );
};

export default Download;
