import { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Shop from "./views/Shop";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import Shoes from "./Products/Shoes";
import Pants from "./Products/Pants";
import Hats from "./Products/Hats";
import Shirts from "./Products/Shirts";
import ClickedProduct from "./components/ClickedProduct";
import Cart from "./components/Cart";
export const ShopData = createContext();

function App() {
  const [selectProduct, setSelectProduct] = useState(null);
  const [cart, setCart] = useState([]);

  /* Lägger till produkter i cart */
  const addItemToCart = (product, number = 1) => {
    const doProductExist = cart.find((object) => object.id === product.id);
    if (doProductExist) {
      setCart(
        cart.map((object) =>
          object.id === product.id
            ? { ...doProductExist, amount: doProductExist.amount + number }
            : object
        )
      );
    } else {
      setCart([...cart, { ...product, amount: number }]);
    }
  };

  /* Minkar antalet produkter i cart */
  const decreaseCartAmount = (product) => {
    const doProductExist = cart.find((object) => object.id === product.id);

    if (doProductExist.amount === 1) {
      setCart(cart.filter((object) => object.id !== product.id));
    } else {
      setCart(
        cart.map((object) =>
          object.id == product.id
            ? { ...doProductExist, amount: doProductExist.amount - 1 }
            : object
        )
      );
    }
  };

  /* Raderar produkten i cart */
  const deleteEntireProduct = (product) => {
    setCart(cart.filter((object) => object.id !== product.id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    /* Skickar detta via useContext */
    <ShopData.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        selectProduct,
        setSelectProduct,
        deleteEntireProduct,
        decreaseCartAmount,
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
            <Route path="/Cart" element={<Cart />} />
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
