import { React, useState } from "react";
import { ProductList } from "../utils/products";
import Randomized from "../components/Randomized";
import SliderHome from "../slider/Slider";
import "../styles/Home.css";

const getRandomProducts = () => {
  const randomProds = ProductList.toSorted(() => Math.random() - Math.random());
  return randomProds.slice(0, 8);
};

const Home = () => {
  const [randomProducts, setRandomProducts] = useState(() =>
    getRandomProducts(ProductList)
  );

  return (
    <>
      <SliderHome />
      <h1 className="section-title">New Arrivals</h1>
      <hr className="breakline" />
      <section id="home-products">
        {randomProducts.map((product, idx) => (
          <Randomized product={product} key={idx} />
        ))}
      </section>
      <hr className="breakline" />
    </>
  );
};

export default Home;
