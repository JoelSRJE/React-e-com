import { useEffect, useState } from "react";
import { ProductList } from "../utils/products";
import DisplayProduct from "../components/DisplayProduct";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(ProductList.filter((product) => product.category === "Shoes"));
  }, []);

  return (
    <section id="products">
      {shoes.map((product) => (
        <DisplayProduct product={product} />
      ))}
    </section>
  );
};

export default Shoes;
