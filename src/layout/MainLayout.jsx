import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

export const ShoppingCartContext = createContext();

const MainLayout = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);


  const handleAddToCart = (selectedProduct) => {
    if (!cartData.some(product => product.id === selectedProduct.id)) {
      setCartData(prevCartData => [...prevCartData, selectedProduct]);
    }
  };
  
  // const totalPrice = 

  console.log("cartdata",cartData);

  const handleRemoveFromCart = (id) => {
    const newCartData = cartData.filter((product) => product.id !== id);
    setCartData(newCartData);
  };

  const removeAllItems = () => {
    setCartData([]);
  };

  return (
    <div className="bg-[rgb(248,249,250)]">
      <ShoppingCartContext.Provider
        value={{ cartData, setCartData, handleAddToCart, handleRemoveFromCart, removeAllItems }}
      >
        <Header />
          <Outlet />
        <Footer />
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default MainLayout;
