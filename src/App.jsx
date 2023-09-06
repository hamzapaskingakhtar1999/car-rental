import React from "react";

/* CSS */
import "./App.css";

/* React Router DOM */
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* pages */
import Home from "./pages/home/Home";

/* Components */
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Models from "./pages/models/Models";
import Testimonials from "./pages/testimonials/TestimonialsPage";
import Team from "./pages/team/Team";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vehiclemodels" element={<Models />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/ourteam" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
