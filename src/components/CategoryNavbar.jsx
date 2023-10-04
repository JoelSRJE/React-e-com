import "../styles/CategoryNavbar.css";
import { useNavigate } from "react-router-dom";

const CategoryNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="category-navbar">
      <ul>
        <li
          className="navbar-options rainbow-one"
          onClick={() => navigate("/Shoes")}
        >
          Shoes
        </li>
        <li
          className="navbar-options rainbow-two"
          onClick={() => navigate("/Shirts")}
        >
          Shirts
        </li>
        <li
          className="navbar-options rainbow-three"
          onClick={() => navigate("/Pants")}
        >
          Pants
        </li>
        <li
          className="navbar-options rainbow-four"
          onClick={() => navigate("/Hats")}
        >
          Hats
        </li>
        <li
          className="navbar-options rainbow-five"
          onClick={() => navigate("/Shop")}
        >
          All Prods
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNavbar;
