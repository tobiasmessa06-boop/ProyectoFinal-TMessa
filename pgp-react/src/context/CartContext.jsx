import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const exist = cart.find(prod => prod.id === item.id);

    if (exist) {
      setCart(cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const increaseQty = (id) => {
    setCart(cart.map(prod =>
      prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(prod =>
      prod.id === id && prod.quantity > 1
        ? { ...prod, quantity: prod.quantity - 1 }
        : prod
    ));
  };

  const clearCart = () => setCart([]);

  const totalItems = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const totalPrice = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeItem,
      increaseQty,
      decreaseQty,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
