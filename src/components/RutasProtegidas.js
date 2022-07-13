import { Outlet } from "react-router-dom";
import { NotFoundError } from "./errores/NotFoundError";

const RutasProtegidas = () => {
  const admin = JSON.parse(localStorage.getItem("usuario"));

  if (admin && admin.usuario.rolId === 1) {
    return <Outlet />;
  } else {
    return <NotFoundError />;
  }
};

export default RutasProtegidas;
