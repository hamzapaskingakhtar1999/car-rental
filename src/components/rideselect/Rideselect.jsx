import React, { useState } from "react";

/* React Spinners */
import { ColorRing } from "react-loader-spinner";

/* CSS */
import "./Rideselect.css";

/* Ride Data */
import { ride } from "../../data/RideData";

const Rideselect = () => {
  const [select, setSelect] = useState("0");
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);

  return (
    <div className="rideselect center">
      <h3 className="rideselect-subheading">Vehicle Models</h3>
      <h1 className="rideselect-heading">Our Rental Fleet</h1>
      <p className="rideselect-description">
        Choose from a variety of our amazing vehicles to rent for your next
        adventure or business trip
      </p>
      <div className="interactive">
        <div className="interactive-items">
          {ride.map((item) => (
            <div className="interactive-vehicles" key={item.index}>
              <button
                className={
                  active == item.index
                    ? "interactive-vehicle-active"
                    : "interactive-vehicle"
                }
                onClick={() => {
                  setSelect(item.index);
                  setActive(item.index);
                }}
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>
        {/* Image Middle */}
        <div className="interactive-image-container">
          {ride.map((item) => (
            <div key={item.index}>
              {item.index == select && (
                <>
                  <img
                    src={item.image}
                    className="interactive-image"
                    style={{
                      display: loading ? "none" : "block",
                    }}
                    onLoad={(e) => {
                      setLoading(false);
                      console.log("LOADED");
                    }}
                  />
                  <div
                    className="spinner"
                    style={{
                      display: loading ? "block" : "none",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    <h1>{console.log("Hi")}</h1>
                    <ColorRing
                      visible={true}
                      height="80"
                      width="80"
                      ariaLabel="blocks-loading"
                      wrapperStyle={{}}
                      wrapperClass="blocks-wrapper"
                      colors={[
                        "#e15b64",
                        "#f47e60",
                        "#f8b26a",
                        "#abbd81",
                        "#849b87",
                      ]}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="interactive-table">
          {ride.map((item) => (
            <div key={item.index}>
              {item.index == select && (
                <div className="interactive-table-item">
                  <h1 className="table-heading">${item.rent} / rent per day</h1>
                  <table>
                    <tr>
                      <th>Model</th>
                      <td>{item.name}</td>
                    </tr>
                    <tr>
                      <th>Mark</th>
                      <td>{item.model}</td>
                    </tr>
                    <tr>
                      <th>Year</th>
                      <td>{item.year}</td>
                    </tr>
                    <tr>
                      <th>AC</th>
                      <td>{item.ac}</td>
                    </tr>
                    <tr>
                      <th>Transmission</th>
                      <td>{item.transmission}</td>
                    </tr>
                    <tr>
                      <th>Fuel</th>
                      <td>{item.fuel}</td>
                    </tr>
                  </table>
                  <button
                    className="hero-button1"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Reserve Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rideselect;
