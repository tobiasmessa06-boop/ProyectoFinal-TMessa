import ItemCount from "../ItemCount/ItemCount";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ id, title, description, price, image }) => {
  const { addToCart } = useCart();

  const onAdd = (quantity) => {
    addToCart({ id, title, price }, quantity);
  };

  return (
    <div className="item-detail">
      <h2>{title}</h2>

      <img
        src={image}
        alt={title}
        className="item-detail-img"
      />

      <p>{description}</p>
      <p>${price}</p>

      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;

