import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getToken from "../../utils/getToken";
import { clearError, setError } from "./errores.slice";

const baseUrl = "https://imprenta-usuarios.herokuapp.com/api/v1/usuarios/";
const token = JSON.parse(window.localStorage.getItem("usuario"))?.token;

export const usersSlice = createSlice({
  name: "usuarios",
  initialState: [],
  reducers: {
    setUsers: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

// usuarios
export const getUsuarios = () => (dispatch) => {
  return axios
    .get(baseUrl, getToken(token))
    .then((res) => dispatch(setUsers(res.data)))
    .finally();
};

export const crearUsuarios = (data) => (dispatch) => {
  return axios
    .post(baseUrl, data)
    .then(() => {
      if (token) {
        dispatch(getUsuarios());
      }
      dispatch(clearError());
    })
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    })
    .finally();
};

export const updateUsuarios = (data) => (dispatch) => {
  return axios.patch(`${baseUrl}/:id`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export default usersSlice.reducer;
