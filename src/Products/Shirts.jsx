import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    setShirts(ProductList.filter((product) => product.category === "Shirts"));
  }, []);

  return (
    <section>
      <Banner category="Shirts" />
      <div id="products">
        {shirts
          .map((product) => (
            <DisplayProducts product={product} key={product.id} />
          ))
          .slice()}
      </div>
    </section>
  );
};

export default Shirts;
