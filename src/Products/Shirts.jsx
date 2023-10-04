import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";
import CategoryNavbar from "../components/CategoryNavbar";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    setShirts(ProductList.filter((product) => product.category === "Shirts"));
  }, []);

  return (
    <section>
      <Banner category="Shirts" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <CategoryNavbar />
      <div id="products">
        {shirts
          .map((product) => (
            <DisplayProducts product={product} key={product.id} />
          ))
          .slice()}
      </div>
      <hr className="breakline" />
    </section>
  );
};

export default Shirts;
