import React from "react";

import "./Home.css";
import Hero from "../../components/hero home/Hero";
import Process from "../../components/process/Process";
import Banner from "../../components/banner/Banner";
import { BannerHomeData } from "../../data/BannerData";
import Choose from "../../components/choose/Choose";
import Testimonials from "../../components/testimonials/Testimonials";
import Faq from "../../components/faq/Faq";
import Download from "../../components/download/Download";
import Footer from "../../components/footer/Footer";
import Rideselect from "../../components/rideselect/Rideselect";

/* Components */

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Process />
      <Rideselect />
      <Banner data={BannerHomeData} />
      <Choose />
      <Testimonials />
      <Faq />
      <Download />
    </div>
  );
};

export default Home;
