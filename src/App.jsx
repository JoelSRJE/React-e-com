import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Shop from "./views/Shop";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import AllProducts from "./Products/AllProducts";
import Shoes from "./Products/Shoes";
import Pants from "./Products/Pants";
import Hats from "./Products/Hats";
import Shirts from "./Products/Shirts";

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
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/Pants" element={<Pants />} />
            <Route path="/Hats" element={<Hats />} />
            <Route path="/Shirts" element={<Shirts />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
