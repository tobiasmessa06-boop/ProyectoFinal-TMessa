import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { games } from "../../data/games";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const getGames = new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId
            ? games.filter((game) => game.category === categoryId)
            : games
        );
      }, 800);
    });

    getGames
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
