import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";
import CategoryNavbar from "../components/CategoryNavbar";
import { useState } from "react";
import "../styles/Home.css";

const Shop = () => {
  /* Visar mer produkter vid onClick */
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Banner category="Shop" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <section id="home-products">
        <CategoryNavbar />
        <div id="products">
          {ProductList.slice(0, toggle ? 40 : 20).map((product, idx) => (
            <DisplayProducts product={product} key={idx} />
          ))}
        </div>
        <div className="show-more">
          <button
            className="toggle-button"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "show less products" : "show more products"}
          </button>
        </div>
      </section>
      <hr className="breakline" />
    </>
  );
};

export default Shop;

/*
       <CategoryNavbar />
        <div id="products">
          {ProductList.map((product, idx) => (
            <DisplayProducts product={product} key={idx} />
          ))}
        </div>
*/
