import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getToken from "../../utils/getToken";
import { clearError, setError } from "./errores.slice";
import { setLoader } from "./loader.slice";

const baseUrl = "https://imprenta-usuarios.herokuapp.com/api/v1/usuarios";
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
  dispatch(setLoader(true));
  return axios
    .get(baseUrl, getToken(token))
    .then((res) => dispatch(setUsers(res.data)))
    .finally(() => dispatch(setLoader(false)))
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    });
};

export const crearUsuarios = (data) => (dispatch) => {
  dispatch(setLoader(true));
  return axios
    .post(baseUrl, data)
    .then(() => {
      if (token) {
        dispatch(getUsuarios());
      }
      alert("usuario registrado");
      dispatch(clearError());
    })
    .finally(() => dispatch(setLoader(false)))
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    });
};

export const actualizarUsuarios = (data) => (dispatch) => {
  dispatch(setLoader(true));
  return axios
    .patch(`${baseUrl}/${data.id}`, data, getToken(token))
    .then(() => {
      alert("usuario Actualizado");
      dispatch(getUsuarios());
    })
    .finally(() => dispatch(setLoader(false)))
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    });
};

export const actualizarRolUsuarios = (data) => (dispatch) => {
  dispatch(setLoader(true));
  console.log(data);
  return axios
    .patch(`${baseUrl}/rol/${data.id}`, data, getToken(token))
    .then(() => {
      alert("usuario Actualizado");
      dispatch(getUsuarios());
    })
    .finally(() => dispatch(setLoader(false)))
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    });
};

export const eliminarUsuarios = (id) => (dispatch) => {
  dispatch(setLoader(true));
  return axios
    .delete(`${baseUrl}/${id}`, getToken(token))
    .then(() => {
      alert("usuario Eliminado");
      dispatch(getUsuarios());
    })
    .finally(() => dispatch(setLoader(false)))
    .catch((err) => {
      const error = { status: err.response.status, error: err.response.data };
      dispatch(setError(error));
    });
};

export default usersSlice.reducer;
