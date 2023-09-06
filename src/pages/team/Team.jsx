import React from "react";

/* CSS */
import "./Team.css";

/* Components */
import Hero from "../../components/hero other/Hero";
import Banner from "../../components/banner/Banner";

/* Data */
import { BannerAboutData } from "../../data/BannerData";
import { TeamData } from "../../data/TeamData";

const Team = () => {
  return (
    <>
      <Hero />
      <div className="team center">
        <div className="team-items">
          {TeamData.map((item) => (
            <div className="team-item">
              <img src={item.img} className="team-image" />
              <h2 style={{ margin: "20px" }}>{item.name}</h2>
              <h4 style={{ color: "gray" }}>{item.occupation}</h4>
            </div>
          ))}
        </div>
      </div>
      <Banner data={BannerAboutData} />
    </>
  );
};

export default Team;
