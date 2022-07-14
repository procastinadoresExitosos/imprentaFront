import { configureStore } from "@reduxjs/toolkit";
import usuarios from "./slices/usuarios.slices";
import roles from "./slices/roles.slices";
import usuarioEnSesion from "./slices/usuarioEnSesion.slice";
import errores from "./slices/errores.slice";
import elementoSeleccionado from "./slices/selecActualizar.slice";

export default configureStore({
  reducer: {
    usuarios,
    roles,
    usuarioEnSesion,
    errores,
    elementoSeleccionado,
  },
});
