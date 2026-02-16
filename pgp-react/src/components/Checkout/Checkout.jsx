import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { db } from "../../service/firebase";



import {
  collection,
  addDoc,
  serverTimestamp,
  writeBatch,
  doc
} from "firebase/firestore";

const Checkout = () => {

  const { cart, totalPrice, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const batch = writeBatch(db);

    try {

      const order = {
        buyer,
        items: cart,
        total: totalPrice,
        date: serverTimestamp()
      };

      const orderRef = await addDoc(
        collection(db, "ordenes"),
        order
      );

      cart.forEach(prod => {
        const productRef = doc(db, "productos", prod.id);

        batch.update(productRef, {
          stock: prod.stock - prod.quantity
        });
      });

      await batch.commit();

      setOrderId(orderRef.id);
      clearCart();

    } catch (error) {
      console.log(error);
    }
  };

  if (orderId) {
    return <h2>Gracias por tu compra 🎮 ID: {orderId}</h2>;
  }

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Teléfono"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <button type="submit">
          Finalizar compra
        </button>
      </form>
    </div>
  );
};

export default Checkout;
