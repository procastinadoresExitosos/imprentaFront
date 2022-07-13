import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setError } from "./errores.slice";

export const usuarioEnSesionSlice = createSlice({
  name: "usuarioEnSesion",
  initialState: JSON.parse(window.localStorage.getItem("usuario")) || null,
  reducers: {
    sessionUser: (state, action) => {
      return action.payload;
    },
    cerrarSesion: (state, action) => {
      window.localStorage.removeItem("usuario");
      return null;
    },
  },
});

export const { sessionUser, cerrarSesion } = usuarioEnSesionSlice.actions;

export const login = (data) => (dispatch) => {
  axios
    .post(
      "https://imprenta-usuarios.herokuapp.com/api/v1/usuarios/login/",
      data
    )
    .then((res) => {
      console.log(res);
      window.localStorage.setItem("usuario", JSON.stringify(res.data));
      dispatch(sessionUser(res.data));
    })
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    });
};

export default usuarioEnSesionSlice.reducer;
