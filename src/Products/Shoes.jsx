import { useEffect, useState } from "react";
import { ProductList } from "../utils/Products";
import DisplayProducts from "../components/DisplayProducts";
import Banner from "../components/Banner";
import CategoryNavbar from "../components/CategoryNavbar";

const Shoes = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    setShoes(ProductList.filter((product) => product.category === "Shoes"));
  }, []);

  return (
    <section>
      <Banner category="Shoes" />
      <h1 className="section-title">Products</h1>
      <hr className="breakline" />
      <CategoryNavbar />
      <div id="products">
        {shoes.map((product, idx) => (
          <DisplayProducts product={product} key={idx} />
        ))}
      </div>
      <hr className="breakline" />
    </section>
  );
};

export default Shoes;
