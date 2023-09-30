import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Shop from "./views/Shop";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import AllProducts from "./Products/AllProducts";
import Shoes from "./Products/Shoes";
import Pants from "./Products/Pants";
import Hats from "./Products/Hats";
import Shirts from "./Products/Shirts";
import ClickedProduct from "./components/ClickedProduct";

export const ShopData = createContext();

/* Npm som används

vite
react-router-dom
react-icons
react-slick
react-carousel

*/

function App() {
  const [selectProduct, setSelectProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const addItemToCart = (product) => {
    setCart([...cart, { product: product, amount: 1 }]);
  };

  const removeItemFromCart = (product) => {
    setCart(cart.filter((item) => item.product !== product));
  };

  const increaseCartAmount = (item) => {
    setCart(
      cart.map((all) => {
        if (all === item) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return all;
        }
      })
    );
  };

  const decreaseCartAmount = (item) => {
    if (item.amount === 1) {
      setCart(cart.filter((all) => all !== item));
    } else {
      setCart(
        cart.map((all) => {
          if (all === item) {
            return { ...item, amount: item.amount - 1 };
          } else {
            return all;
          }
        })
      );
    }
  };

  const doesItemExist = (product) => {
    for (let item of cart) {
      if (item.product === product) {
        return true;
      }
    }

    return false;
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ShopData.Provider
      value={{
        selectProduct,
        setSelectProduct,
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        increaseCartAmount,
        decreaseCartAmount,
        doesItemExist,
      }}
    >
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Shop" element={<Shop />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/AllProducts" element={<AllProducts />} />
            <Route path="/Shoes" element={<Shoes />} />
            <Route path="/Pants" element={<Pants />} />
            <Route path="/Hats" element={<Hats />} />
            <Route path="/Shirts" element={<Shirts />} />
            <Route path="/ClickedProduct/:id" element={<ClickedProduct />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopData.Provider>
  );
}

export default App;
