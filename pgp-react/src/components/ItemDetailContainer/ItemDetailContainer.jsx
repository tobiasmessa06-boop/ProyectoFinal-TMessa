import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { games } from "../../data/games";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getGame = new Promise((resolve) => {
      setTimeout(() => {
        resolve(games.find(game => game.id === itemId));
      }, 800);
    });

    getGame.then(res => {
      setItem(res);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <>
      {loading ? <h2>Cargando detalle...</h2> : item && <ItemDetail {...item} />}
    </>
  );
};

export default ItemDetailContainer;
