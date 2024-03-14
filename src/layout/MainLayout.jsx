import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";

export const ShoppingCartContext = createContext();

const MainLayout = () => {
  const [currency, setCurrency] = useState([]);
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  useEffect(() => {
    axios
      .get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
      .then((response) => {
        const currencyData = response.data;
        const currency = [
          currencyData.find((currency) => currency.Ccy === "USD"),
          currencyData.find((currency) => currency.Ccy === "RUB"),
          currencyData.find((currency) => currency.Ccy === "UZS"),
        ];

        // Bitta datada saqlangan valyuta ma'lumotlarini chiqarish
        setCurrency(currency);
      });
  }, []);

  const totalPrice = cartData.reduce(
    (total, product) => total + product.cost * product.quantity,
    0
  );

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    localStorage.setItem("cartData", JSON.stringify(cartData));
  }, [cartData]);

  const handleAddToCart = (selectedProduct) => {
    const productExists = cartData.some(
      (product) => product.id === selectedProduct.id
    );

    if (productExists) {
      // Agar mahsulot allaqachon savatda mavjud bo'lsa, uning quantity'sini o'zgartiramiz
      const updatedCartData = cartData.map((product) =>
        product.id === selectedProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCartData(updatedCartData);
    } else {
      // Agar mahsulot savatda mavjud emas bo'lsa, uni savatga qo'shamiz va quantity'sini 1 qilamiz
      setCartData((prevCartData) => [
        ...prevCartData,
        { ...selectedProduct, quantity: 1 },
      ]);
    }
  };

  // const totalPrice =

  console.log("cartdata", cartData);

  // - ELEMENT
  const handleRemoveFromCart = (id) => {
    const newCartData = cartData.filter((product) => product.id !== id);
    setCartData(newCartData);
  };

  const handleRemoveQuantityFromCart = (id) => {
    const updatedCartData = cartData.map((product) =>
      product.id === id
        ? { ...product, quantity: Math.max(0, product.quantity - 1) }
        : product
    );
    setCartData(updatedCartData.filter((product) => product.quantity > 0));
  };

  const removeAllItems = () => {
    setCartData([]);
  };

  return (
    <div className="bg-[rgb(248,249,250)]">
      <ShoppingCartContext.Provider
        value={{
          cartData,
          setCartData,
          handleAddToCart,
          handleRemoveFromCart,
          removeAllItems,
          handleRemoveQuantityFromCart,
          totalPrice,
          currency,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </ShoppingCartContext.Provider>
    </div>
  );
};

export default MainLayout;
