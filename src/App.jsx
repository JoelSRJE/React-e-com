import { useState } from "react";
import About from "./views/About";
import Contact from "./views/Contact";
import Shop from "./views/Shop";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Npm som används

vite
react-router-dom
react-icons
react-slick
react-carousel

*/

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
