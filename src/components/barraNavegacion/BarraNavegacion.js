import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cerrarSesion } from "../../store/slices/usuarioEnSesion.slice";
const BarraNavegacion = () => {
  const usuarioEnSesion = useSelector((state) => state.usuarioEnSesion);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-sm">
        <Link className="navbar-brand" to="/">
          Gestión de Imprenta
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              {usuarioEnSesion && usuarioEnSesion.usuario.rolId === 1 && (
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              )}
            </li>
            <li className="nav-item">
              {usuarioEnSesion ? (
                <Link
                  className="nav-link"
                  to="/"
                  onClick={() => dispatch(cerrarSesion())}
                >
                  Cerrar sesión
                </Link>
              ) : (
                <Link className="nav-link" to="/login">
                  Iniciar sesión
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BarraNavegacion;
