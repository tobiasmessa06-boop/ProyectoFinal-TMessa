import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const {
    cart,
    totalPrice,
    removeItem,
    increaseQty,
    decreaseQty,
    clearCart
  } = useCart();

  if (cart.length === 0) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        El carrito está vacío 🛒
      </h2>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito</h2>

      {cart.map(prod => (
        <div key={prod.id} className="cart-item">
          <h3>{prod.title}</h3>
          <p>Precio unitario: ${prod.price}</p>

          <div className="cart-qty">
  <button onClick={() => decreaseQty(prod.id)}>-</button>
  <span>Cantidad: {prod.quantity}</span>
  <button onClick={() => increaseQty(prod.id)} >+</button>
</div>


          <p>Subtotal: ${prod.price * prod.quantity}</p>

          <button onClick={() => removeItem(prod.id)}>
            🗑 Eliminar
          </button>
        </div>
      ))}

      <h2>Total a pagar: ${totalPrice}</h2>

      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>

      <button onClick={clearCart}>
        Vaciar carrito
      </button>
    </div>
  );
};

export default Cart;
