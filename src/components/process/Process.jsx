import React from "react";

/* CSS */
import "./Process.css";

/* Images */
import Process1 from "../../assets/Process/process1.png";
import Process2 from "../../assets/Process/process2.png";
import Process3 from "../../assets/Process/process3.png";

const Process = () => {
  return (
    <div className="process center">
      <h3 className="process-subheading">Plan your trip now</h3>
      <h1 className="process-heading">Quick & easy car rental</h1>
      <div className="process-items">
        <div className="process-item">
          <img src={Process1} className="process-item-image" />{" "}
          <h1 className="process-item-heading">Select Car</h1>
          <p className="process-item-description">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="process-item">
          <img src={Process2} className="process-item-image" />{" "}
          <h1 className="process-item-heading">Contact Operator</h1>
          <p className="process-item-description">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="process-item">
          <img src={Process3} className="process-item-image" />{" "}
          <h1 className="process-item-heading">Let's Drive</h1>
          <p className="process-item-description">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
