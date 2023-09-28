import { Link } from "react-router-dom";
import "../styles/CatCards.css";

// Lägg till link
const Categories = ({ product }) => {
  return (
    <Link to="">
      <div className="category-select-card">
        <img src={product.img} className="category-img" />
        <div>
          <span className="category-select-text">{product.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
