import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity) => {
    const existing = cart.find(prod => prod.id === item.id);

    if (existing) {
      setCart(cart.map(prod =>
        prod.id === item.id
          ? { ...prod, quantity: prod.quantity + quantity }
          : prod
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(prod =>
      prod.id === id
        ? { ...prod, quantity: prod.quantity + 1 }
        : prod
    ));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(prod =>
          prod.id === id
            ? { ...prod, quantity: prod.quantity - 1 }
            : prod
        )
        .filter(prod => prod.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (acc, prod) => acc + prod.price * prod.quantity,
    0
  );

  const totalItems = cart.reduce(
    (acc, prod) => acc + prod.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        totalPrice,
        totalItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
