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

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
