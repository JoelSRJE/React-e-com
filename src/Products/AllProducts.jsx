import React from "react";
import { ProductList } from "../utils/products";
import DisplayProduct from "../components/DisplayProduct";

const AllProducts = () => {
  return (
    <section id="products">
      {ProductList.map((product) => (
        <DisplayProduct product={product} />
      ))}
    </section>
  );
};

export default AllProducts;
