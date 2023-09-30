import React from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";

const AllProducts = () => {
  return (
    <section id="products">
      <Banner category="All Products" />
      {ProductList.map((product, idx) => (
        <DisplayProducts product={product} key={idx} />
      ))}
    </section>
  );
};

export default AllProducts;
