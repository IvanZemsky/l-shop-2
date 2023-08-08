import React from 'react'
import { useEffect } from 'react';
import { createContext, useState } from 'react'

export const ShopContext = createContext(null);

export function ShopProductsContext(props) {

  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    console.log(cartProducts);
  }, [cartProducts]);

  const addToCart = (product) => {
    if (cartProducts.find(item => item.id == product.id)) {
      const updatedCartProducts = cartProducts.map(item =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCartProducts(updatedCartProducts);
    }
    else {
      setCartProducts([...cartProducts, { ...product, amount: 1 }]);
    }


  }

  const removeFromCart = (product) => {

  }

  const contextValue = {
    cartProducts, addToCart, removeFromCart
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}