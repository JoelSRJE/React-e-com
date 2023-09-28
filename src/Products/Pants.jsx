import { useEffect, useState } from "react";
import { ProductList } from "../utils/products";
import DisplayProduct from "../components/DisplayProduct";

const Pants = () => {
  const [pants, setPants] = useState([]);

  useEffect(() => {
    setPants(ProductList.filter((product) => product.category === "Pants"));
  }, []);

  return (
    <section id="products">
      {pants.map((product) => (
        <DisplayProduct product={product} />
      ))}
    </section>
  );
};

export default Pants;
