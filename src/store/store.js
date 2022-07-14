import { configureStore } from "@reduxjs/toolkit";
import usuarios from "./slices/usuarios.slices";
import roles from "./slices/roles.slices";
import usuarioEnSesion from "./slices/usuarioEnSesion.slice";
import errores from "./slices/errores.slice";
import elementoSeleccionado from "./slices/selecActualizar.slice";
import loader from "./slices/loader.slice";

export default configureStore({
  reducer: {
    usuarios,
    roles,
    usuarioEnSesion,
    errores,
    elementoSeleccionado,
    loader,
  },
});
