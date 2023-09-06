import React from "react";

/* CSS */
import "./TestimonialsPage.css";

/* Components */
import Hero from "../../components/hero other/Hero";
import Testimonials from "../../components/testimonials/Testimonials";
import Banner from "../../components/banner/Banner";

/* Data */
import { BannerAboutData } from "../../data/BannerData";

const TestimonialsPage = () => {
  return (
    <div className="testimonials-page">
      <Hero />
      <Testimonials />
      <Banner data={BannerAboutData} />
    </div>
  );
};

export default TestimonialsPage;
