import { useState } from "react";
import { ProductList } from "../utils/products";
import "../styles/Home.css";
import Banner from "../components/Banner";
import { CategoryData } from "../utils/CategorySelectData";
import Categories from "../components/Categories";

const Shop = () => {
  // Kan möjligtvis ta bort..
  const [isActive, setIsActive] = useState(true);
  const onClick = () => setIsActive(!isActive);

  return (
    <>
      <Banner category="Categories" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <section id="home-products">
        <button
          className={`return-btn ${isActive ? "hidden" : "visible"}`}
          onClick={onClick}
        >
          Go back
        </button>
        <div className="category-select-container">
          {CategoryData.map((product) => (
            <Categories product={product} />
          ))}
        </div>
      </section>
      <hr className="breakline" />
    </>
  );
};

export default Shop;
