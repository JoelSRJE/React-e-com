import { Link } from "react-router-dom";

const Categories = ({ categoryData }) => {
  return (
    <Link to={categoryData.route}>
      <div className="category-select-card">
        <img src={categoryData.img} className="category-img" />
        <div>
          <span className="category-select-text">{categoryData.category}</span>
        </div>
      </div>
    </Link>
  );
};

export default Categories;
