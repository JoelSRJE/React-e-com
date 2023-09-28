import { useState } from "react";
import "../styles/Home.css";
import Banner from "../components/Banner";
import { CategoryData } from "../utils/CategorySelectData";
import Categories from "../components/Categories";

const Shop = ({ ProductList, setFilteredProducts }) => {
  // Kan möjligtvis ta bort..
  const [isActive, setIsActive] = useState(true);
  const onClick = () => setIsActive(!isActive);

  const selectCategory = (category) => {
    const selected = ProductList.filter((product) => {
      return product.category.includes(category.toLowerCase());
    });
    setFilteredProducts(selected);
  };
  return (
    <>
      <Banner category="Categories" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <section id="home-products">
        <button className={`return-btn ${isActive ? "hidden" : "visible"}`}>
          Go back
        </button>

        <div className="category-select-container">
          {CategoryData.map((categoryData, idx) => (
            <Categories
              categoryData={categoryData}
              key={idx}
              onClick={() => selectCategory(category)}
            />
          ))}
        </div>
      </section>
      <hr className="breakline" />
    </>
  );
};

export default Shop;
