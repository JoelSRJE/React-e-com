import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";
import CategoryNavbar from "../components/CategoryNavbar";

const Pants = () => {
  const [pants, setPants] = useState([]);

  /* Sorterar alla produkter med kategorin Pants */
  useEffect(() => {
    setPants(ProductList.filter((product) => product.category === "Pants"));
  }, []);

  return (
    <section>
      <Banner category="Pants" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <CategoryNavbar />
      <div id="products">
        {pants.map((product, idx) => (
          <DisplayProducts product={product} key={idx} />
        ))}
      </div>
      <hr className="breakline" />
    </section>
  );
};

export default Pants;
