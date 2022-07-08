import { Link } from "react-router-dom";
const BarraNavegacion = () => {
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/login">login</Link>
      </nav>
    </>
  );
};

export default BarraNavegacion;
