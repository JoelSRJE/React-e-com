import "../styles/Home.css";
import Banner from "../components/Banner";
import { CategoryData } from "../utils/CategorySelectData";
import Categories from "../components/Categories";

const Shop = () => {
  return (
    <>
      <Banner category="Categories" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <section id="home-products">
        <div className="category-select-container">
          {CategoryData.map((categoryData, idx) => (
            <Categories categoryData={categoryData} key={idx} />
          ))}
        </div>
      </section>
      <hr className="breakline" />
    </>
  );
};

export default Shop;
