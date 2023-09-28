import shoe3front from "../images/shoe3front.webp";
import cap2front from "../images/cap2front.webp";
import hoodie2front from "../images/hoodie2front.webp";
import pants5front from "../images/pants5front.webp";
import allprods from "../images/allprods.jpg";

export const CategoryData = [
  {
    id: 1,
    img: shoe3front,
    category: "Shoes",
    route: "/Shoes",
  },

  {
    id: 2,
    img: hoodie2front,
    category: "Shirts",
    route: "/Shirts",
  },

  {
    id: 3,
    img: pants5front,
    category: "Pants",
    route: "/Pants",
  },

  {
    id: 4,
    img: cap2front,
    category: "Headwear",
    route: "/Hats",
  },

  {
    id: 5,
    img: allprods,
    category: "All Products",
    route: "/AllProducts",
  },
];
