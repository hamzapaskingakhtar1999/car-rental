import React from "react";

/* CSS */
import "./Choose.css";

/* Images */
import ChooseImage from "../../assets/choose/choose-image.png";
import Choose1 from "../../assets/choose/choose1.png";
import Choose2 from "../../assets/choose/choose2.png";
import Choose3 from "../../assets/choose/choose3.png";

const Choose = () => {
  return (
    <div className="choose center">
      <img src={ChooseImage} className="choose-main-image" />
      <div className="choose-flex">
        <div className="choose-left">
          <h4 className="choose-subheading">Why Choose Us</h4>
          <h1 className="choose-heading">
            Best valued deals you will ever find
          </h1>
          <p className="choose-description">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="hero-button1">Find Details</button>
        </div>
        {/* Rights */}
        <div className="choose-right">
          <div className="choose-right-items">
            <div className="choose-right-item">
              <img src={Choose1} />
              <div className="choose-right-texts">
                <h1 className="choose-right-texts-heading">
                  Cross Country Drive
                </h1>
                <p className="choose-right-texts-decription">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
            </div>
            <div className="choose-right-item">
              <img src={Choose2} />
              <div className="choose-right-texts">
                <h1 className="choose-right-texts-heading">
                  All Inclusive Pricing
                </h1>
                <p className="choose-right-texts-decription">
                  Get everything you need in one convenient, transparent price
                  with our all-inclusive pricing policy.
                </p>
              </div>
            </div>
            <div className="choose-right-item">
              <img src={Choose3} />
              <div className="choose-right-texts">
                <h1 className="choose-right-texts-heading">
                  No Hidden Charges
                </h1>
                <p className="choose-right-texts-decription">
                  Enjoy peace of mind with our no hidden charges policy. We
                  believe in transparent and honest pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
