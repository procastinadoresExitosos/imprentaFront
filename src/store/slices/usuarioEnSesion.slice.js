import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usuarioEnSesionSlice = createSlice({
  name: "usuarioEnSesion",
  initialState: JSON.parse(window.localStorage.getItem("usuario")) || null,
  reducers: {
    sessionUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { sessionUser } = usuarioEnSesionSlice.actions;

export const login = (data) => (dispatch) => {
  axios
    .post("http://localhost:8090/api/v1/usuarios/login/", data)
    .then((res) => {
      window.localStorage.setItem("usuario", JSON.stringify(res.data));
      dispatch(sessionUser(res.data));
    })
    .catch((error) => {
      console.log(error.response.status);
      if (error.response.status === 401) {
        alert("Credenciales incorrectas");
      }
    });
};

export default usuarioEnSesionSlice.reducer;
