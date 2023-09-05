import React, { useState } from "react";

/* CSS */
import "./Rideselect.css";

/* Images */
import i8 from "../../assets/cars/i8.png";
import civic from "../../assets/cars/civic.jpg";
import fortuner from "../../assets/cars/fortuner.png";
import gli from "../../assets/cars/gli.jpg";
import sclass from "../../assets/cars/sclass.png";
import tx from "../../assets/cars/tx.jpg";

const Rideselect = () => {
  const [select, setSelect] = useState("0");
  const [active, setActive] = useState(0);

  const ride = [
    {
      index: 0,
      name: "BMW i8",
      image: i8,
      rent: 45,
      model: "BMW",
      year: 2018,
      ac: "Yes",
      transmission: "Auto",
      fuel: "Petrol",
    },
    {
      index: 1,
      name: "Honda Civic",
      image: civic,
      rent: 20,
      model: "Honda",
      year: 2020,
      ac: "Yes",
      transmission: "Auto",
      fuel: "Petrol",
    },
    {
      index: 2,
      name: "Toyota Fortuner Sigma",
      image: fortuner,
      rent: 25,
      model: "Toyota",
      year: 2021,
      ac: "Yes",
      transmission: "Auto",
      fuel: "Diesel",
    },
    {
      index: 3,
      name: "Toyota Corolla GLI",
      image: gli,
      rent: 15,
      model: "Toyota",
      year: 2021,
      ac: "Yes",
      transmission: "Auto",
      fuel: "Petrol",
    },
    {
      index: 4,
      name: "Mercedes Benz S-class",
      image: sclass,
      rent: 35,
      model: "Mercedes Benz",
      year: 2020,
      ac: "Yes",
      transmission: "Auto",
      fuel: "Petrol",
    },
    {
      index: 5,
      name: "Land Cruiser TX",
      image: tx,
      rent: 30,
      model: "Toyota",
      year: 2022,
      ac: "Yes",
      transmission: "Auto",
      fuel: "Diesel",
    },
  ];

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
        <div className="interactive-image-container">
          {ride.map((item) => (
            <div key={item.index}>
              {item.index == select && (
                <img src={item.image} className="interactive-image" />
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
