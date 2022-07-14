import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { cerrarSesion } from "../../store/slices/usuarioEnSesion.slice";

 const BarraNavegacion = () => {

   const usuarioEnSesion = useSelector((state) => state.usuarioEnSesion);
   console.log(usuarioEnSesion);
   const dispatch = useDispatch();

   return (
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-sm">
        <a class="navbar-brand" href="#">Gestión de Imprenta </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">Inicio</Link>
              
            </li>
            <li class="nav-item">
              {usuarioEnSesion && usuarioEnSesion.usuario.rolId === 1 && (
                <Link class="nav-link" href="#" to="/dashboard">Dashboard</Link>
              )}
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
            <li class="nav-item">
              {usuarioEnSesion ? (
              <Link to="/" class="nav-link" href="#" onClick={() => dispatch(cerrarSesion())}>
                Cerrar sesión
              </Link>
              ) : (

                <Link to="/login" class="nav-link" href="#">Iniciar sesión</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
   );
 };

 
export default BarraNavegacion;
