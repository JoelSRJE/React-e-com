import { useEffect, useState } from "react";
import { ProductList } from "../utils/products";
import DisplayProduct from "../components/DisplayProduct";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    setShirts(ProductList.filter((product) => product.category === "Shirts"));
  }, []);

  return (
    <section id="products">
      {shirts.map((product) => (
        <DisplayProduct product={product} />
      ))}
    </section>
  );
};

export default Shirts;
