import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";

const Hats = () => {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    setHats(ProductList.filter((product) => product.category === "Hats"));
  }, []);

  return (
    <section>
      <Banner category="Hats" />
      <div id="products">
        {hats.map((product, idx) => (
          <DisplayProducts product={product} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Hats;
