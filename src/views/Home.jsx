import { React, useState } from "react";
import { ProductList } from "../utils/Products";
import Randomized from "../components/Randomized";
import SliderHome from "../slider/Slider";
import "../styles/Home.css";
import { CategoryData } from "../utils/CategorySelectData";
import Categories from "../components/Categories";
import Season from "../components/Season";

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
      <h1 className="section-title">Categories</h1>
      <hr className="breakline" />
      <div className="category-select-container">
        {CategoryData.map((categoryData, idx) => (
          <Categories categoryData={categoryData} key={idx} />
        ))}
      </div>
      <Season />
      <div id="home-products-wrapper">
        <h1 className="section-title">New Arrivals</h1>
        <hr className="breakline" />
        <section id="home-products">
          <div id="products">
            {randomProducts.map((product, idx) => (
              <Randomized product={product} key={idx} />
            ))}
          </div>
        </section>
        <hr className="breakline" />
      </div>
    </>
  );
};

export default Home;
