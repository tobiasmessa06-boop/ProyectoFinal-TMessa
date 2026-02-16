import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, title, price }) => {
  return (
    <div className="item">
      <h3>{title}</h3>
      <p>${price}</p>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
