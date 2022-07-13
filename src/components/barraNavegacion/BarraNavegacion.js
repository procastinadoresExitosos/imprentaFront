import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cerrarSesion } from "../../store/slices/usuarioEnSesion.slice";
const BarraNavegacion = () => {
  const usuarioEnSesion = useSelector((state) => state.usuarioEnSesion);
  console.log(usuarioEnSesion);
  const dispatch = useDispatch();
  return (
    <>
      <nav>
        <Link to="/">Inicio</Link>
        {usuarioEnSesion && usuarioEnSesion.usuario.rolId === 1 && (
          <Link to="/dashboard">Dashboard</Link>
        )}
        {usuarioEnSesion ? (
          <Link to="/" onClick={() => dispatch(cerrarSesion())}>
            Cerrar sesión
          </Link>
        ) : (
          <Link to="/login">Iniciar sesión</Link>
        )}
      </nav>
    </>
  );
};

export default BarraNavegacion;
