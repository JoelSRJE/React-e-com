import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProduct from "../components/DisplayProduct";

const Hats = () => {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    setHats(ProductList.filter((product) => product.category === "Hats"));
  }, []);

  return (
    <section id="products">
      {hats.map((product) => (
        <DisplayProduct product={product} />
      ))}
    </section>
  );
};

export default Hats;
