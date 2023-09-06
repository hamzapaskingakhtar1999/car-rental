import React from "react";

/* CSS */
import "./Vehicle.css";

import { ride } from "../../data/RideData";

import { BiSolidCar } from "react-icons/bi";

const models = () => {
  return (
    <div className="models">
      <div className="models-items center">
        {ride.map((item) => (
          <div className="models-item">
            <img src={item.image} className="models-item-image" />
            <div className="models-item-content">
              <div className="models-item-left">
                <h3>{item.name}</h3>
                ⭐⭐⭐⭐⭐
                <div className="model-items-text">
                  <div className="model-item-text">
                    <BiSolidCar />
                    <p>{item.model}</p>
                  </div>
                  <div className="model-item-text">
                    <BiSolidCar />
                    <p>{item.transmission}</p>
                  </div>
                </div>
              </div>
              <div className="models-item-right">
                <h3 style={{ color: "orangered" }}>${item.rent}</h3>
                <h3>per day</h3>

                <div className="model-items-text">
                  <div className="model-item-text">
                    <BiSolidCar />
                    <p>AC</p>
                  </div>
                  <div className="model-item-text">
                    <BiSolidCar />
                    <p>{item.fuel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default models;
