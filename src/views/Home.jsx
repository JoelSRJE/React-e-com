import React from "react";
import { ProductList } from "../utils/products";
import SliderHome from "../slider/Slider";
import "../styles/Home.css";
const getRandomProducts = () => {
  const randomProds = ProductList.sort();
};

const Home = () => {
  return (
    <>
      <SliderHome />
    </>
  );
};

export default Home;
