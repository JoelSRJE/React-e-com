import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";

const Pants = () => {
  const [pants, setPants] = useState([]);

  useEffect(() => {
    setPants(ProductList.filter((product) => product.category === "Pants"));
  }, []);

  return (
    <section>
      <Banner category="Pants" />
      <div id="products">
        {pants.map((product, idx) => (
          <DisplayProducts product={product} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Pants;
