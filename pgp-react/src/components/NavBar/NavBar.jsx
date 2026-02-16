import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import "./NavBar.css";
import logo from "../../assets/logo.png";


const NavBar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">
     <div className="logo-container">
  <img src={logo} alt="Logo" className="logo-img" />
  <span className="logo-text">PATAGONIA GO PLAY</span>
</div>



      <div className="links">
        <Link to="/">Todos</Link>
        <Link to="/categoria/accion">Acción</Link>
        <Link to="/categoria/rpg">RPG</Link>
        <Link to="/categoria/deportes">Deportes</Link>
        <Link to="/categoria/terror">Terror</Link>
      </div>

      <Link to="/cart" className="cart-widget">
        <FaShoppingCart size={22} />
        {totalItems > 0 && (
          <span className="cart-count">{totalItems}</span>
        )}
      </Link>
    </nav>
  );
};

export default NavBar;
