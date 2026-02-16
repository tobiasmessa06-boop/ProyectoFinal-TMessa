import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>404</h2>
      <p>Página no encontrada</p>

      <Link to="/">Volver al catálogo</Link>
    </div>
  );
};

export default NotFound;
