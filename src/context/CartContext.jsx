import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const id = Date.now().toString();
    setCart((prev) => [...prev, { id, ...item }]);
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
}
