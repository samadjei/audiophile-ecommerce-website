import React, { useEffect, useState, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  return (
    <CartContext.Provider
      value={{item: 1}}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;


