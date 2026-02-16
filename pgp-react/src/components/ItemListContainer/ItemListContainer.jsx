import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../service/firebase";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const traerProductos = async () => {
      try {
        const productosRef = collection(db, "productos");

        const q = categoryId
          ? query(productosRef, where("category", "==", categoryId))
          : productosRef;

        const snapshot = await getDocs(q);

        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(productos);
      } catch (error) {
        console.log("Error trayendo productos:", error);
      } finally {
        setLoading(false);
      }
    };

    traerProductos();
  }, [categoryId]);

  return (
    <>
      {loading ? (
        <h2>Cargando juegos...</h2>
      ) : (
        <div className="item-list">
          <ItemList items={items} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;

  // useEffect(() => {
  //   setLoading(true);

  //   const getGames = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(
  //         categoryId
  //           ? games.filter((game) => game.category === categoryId)
  //           : games
  //       );
  //     }, 800);
  //   });

  //   getGames
  //     .then((res) => {
  //       setItems(res);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [categoryId]);
