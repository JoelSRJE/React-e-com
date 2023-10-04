import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";
import CategoryNavbar from "../components/CategoryNavbar";

const Hats = () => {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    setHats(ProductList.filter((product) => product.category === "Hats"));
  }, []);

  return (
    <section>
      <Banner category="Hats" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <CategoryNavbar />
      <div id="products">
        {hats.map((product, idx) => (
          <DisplayProducts product={product} key={idx} />
        ))}
      </div>
      <hr className="breakline" />
    </section>
  );
};

export default Hats;
