import { useState } from "react";
import { useCart } from "../../context/CartContext";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ Nombre: "", Email: "", Telefono: "" });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulación de compra
    const fakeOrderId = Math.floor(Math.random() * 100000);
    setOrderId(fakeOrderId);
    clearCart();
  };

  if (orderId) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>Finalizar compra</h2>

      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={buyer.name}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={buyer.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <input
          type="tel"
          name="phone"
          placeholder="Teléfono"
          value={buyer.phone}
          onChange={handleChange}
          required
        />
        <br /><br />

        <h3>Total a pagar: ${totalPrice}</h3>

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default Checkout;
