import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(ProductList.filter((product) => product.category === "Shoes"));
  }, []);

  return (
    <section>
      <Banner category="Shoes" />
      <div id="products">
        {shoes.map((product, idx) => (
          <DisplayProducts product={product} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Shoes;
