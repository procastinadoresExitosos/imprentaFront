import { configureStore } from "@reduxjs/toolkit";
import usuarios from "./slices/usuarios.slices";
import roles from "./slices/roles.slices";
import usuarioLogeado from "./slices/usuarioLogeado.slices";

export default configureStore({
  reducer: {
    usuarios,
    roles,
    usuarioLogeado,
  },
});
