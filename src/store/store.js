import { configureStore } from "@reduxjs/toolkit";
import usuarios from "./slices/usuarios.slices";
import roles from "./slices/roles.slices";
import usuarioEnSesion from "./slices/usuarioEnSesion.slice";

export default configureStore({
  reducer: {
    usuarios,
    roles,
    usuarioEnSesion,
  },
});
