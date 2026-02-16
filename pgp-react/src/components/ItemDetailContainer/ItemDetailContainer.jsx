import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../service/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    const traerProducto = async () => {
      try {
        const docRef = doc(db, "productos", itemId);
        const snapshot = await getDoc(docRef);

        if (snapshot.exists()) {
          setItem({
            id: snapshot.id,
            ...snapshot.data(),
          });
        }
      } catch (error) {
        console.log("Error trayendo producto:", error);
      } finally {
        setLoading(false);
      }
    };

    traerProducto();
  }, [itemId]);

  if (loading) return <h2>Cargando detalle...</h2>;
  if (!item) return <h2>Producto no encontrado</h2>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
